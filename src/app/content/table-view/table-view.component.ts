import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  // Variable Declaration
  storedData: any = [];

  displayedColumns: string[] = ['id', 'productName', 'amount', 'description', 'action'];
  dataSource = new MatTableDataSource<Product>([]);
  @Output() tabIndexChange = new EventEmitter<number>();

  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private router: Router) { }


  ngOnInit(): void {
    this.getProductList();
  }

  /**
* @method getProductList
* @description Function is called to get table data 
*/
  getProductList(): void {
    this.productService.getProductListApi().subscribe(
      resp => {
        this.storedData = resp;
        this.dataSource = new MatTableDataSource<Product>(this.storedData);

      },
      err => {
        this.toastr.error(err);
      }
    );
  }

  /**
* @method deleteProduct
* @description Function is called to delete data of a particular row in table
* @param element particular table row
*/
  deleteProduct(element: Product): void {
    this.productService.deleteProductApi(Number(element.id)).subscribe(
      resp => {
        this.storedData = this.storedData.filter((p: any) => p !== element);
        this.dataSource = new MatTableDataSource<Product>(this.storedData);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

  /**
* @method updateProduct
* @description Function is called to update data of a particular row in table
* @param element particular table row
*/
  updateProduct(element: any): void {
    element.id = Number(element.id);
    element.toggle = !element.toggle;
    this.productService.updateProductApi(element).subscribe(
      resp => {
        for (let i = 0; i < this.storedData.length; i++) {
          if (this.storedData[i].id === element.id) {
            this.storedData[i] = element;
          }
        }
      },
      err => {
        this.toastr.error(err);
      }
    );

  }

  /**
* @method toggleIcon
* @description Function is called to hide/show the edit and save icon
* @param element particular table row
*/
  toggleIcon(element: Product): void {
    element.toggle = !element.toggle;
    this.dataSource.data.forEach(el => {
      if (el !== element) {
        el['disabled'] = true;
      }
    });
  }

  /**
* @method funcForChangingMatTable
* @description Function is called to check whether last element delete reached or not, 
   if reached then switch tab to card view
* @param element particular table row
*/
  funcForChangingMatTable(element: Product) {
    if (element.id === this.storedData[this.storedData.length - 1].id) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/content', true], { skipLocationChange: true });
      });

    }

  }
}
