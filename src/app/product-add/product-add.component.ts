import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProductForm!: FormGroup;
  createdData: any;

  constructor(private productService: ProductService,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
* @method createForm
* @description Function to create form group
*/
  createForm(): void {
    this.addProductForm = this.fb.group({
      productID: [''],
      productName: [''],
      price: [''],
      description: [''],
    });
  }

  /**
* @method submitProduct
* @description Function to add/submit product
*/
  submitProduct(): void {
    const formCtrl = this.addProductForm.controls;
    if (this.addProductForm.valid) {
      const params: Product = {
        id: formCtrl.productID.value,
        productName: formCtrl.productName.value,
        amount: formCtrl.price.value,
        description: formCtrl.description.value,
      }

      this.productService.createPolicyApi(params).subscribe(
        resp => {
          this.createdData = resp;
          if (this.createdData) {
            this.addProductForm.reset();
            this.toastr.success('Product Added Successfully');
          }
        },
        err => {
          this.toastr.error(err);
        }
      );
    } else {
      this.toastr.error('Please fill all the details');
    }


  }

}
