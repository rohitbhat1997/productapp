import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  storedData: any = [];

  constructor(private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProductList();
  }


  /**
* @method showText
* @description Function to toggle read more and read less 
*/
  showText(element: Product): void {
    element.readmore = !element.readmore
  }

  /**
 * @method getProductList
 * @description Function to get complete cards data
 */
  getProductList(): void {
    this.productService.getProductListApi().subscribe(
      resp => {
        if (resp) {
          this.storedData = resp;
          this.storedData.forEach((element: Product) => {
            element['readmore'] = true;

          });
        } else {
          this.toastr.error('Data Not Found');
        }
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

}
