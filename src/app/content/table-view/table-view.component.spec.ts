import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;
  let PRODUCTS: any[];
  let mockProductService: any;
  let mockToastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    PRODUCTS = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
      { id: 2, productName: 'Product 2', amount: 2000, description: 'Product with great specifications.' },
      { id: 3, productName: 'Product 3', amount: 3000, description: 'Product with great specifications.' },
    ];

    mockProductService = jasmine.createSpyObj(['deleteProductApi', 'getProductListApi', 'updateProductApi']);
    component = new TableViewComponent(mockProductService, mockToastr);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
* @description when mockProductService is called it returnValue true , once it is done assign 
PRODUCTS  array of obj. to storedData and then call delete method of component and delete 2 index from products
Once done , check the new length of storedData , it should be 2
*/
  it('should delete product from product list', () => {
    mockProductService.deleteProductApi.and.returnValue(of(true));
    component.storedData = PRODUCTS;
    component.deleteProduct(PRODUCTS[2]);
    expect(component.storedData.length).toBe(2);

  });

  /**
* @description This unit test case will return the value which is present in DB , in this test
* case when we are calling getProductList() we can expect [] as it is returnValue , 
* if we want to return array of objects we can pass the same in returnValue and then call the function 
* and expect same in component.storedData.
*/
  it('should get product from product list', () => {
    mockProductService.getProductListApi.and.returnValue(of(true));
    component.getProductList();
    expect(component.storedData).toEqual(true);
  });


  /**
* @description This unit test case will return the value which 
we are passing in updateProduct() of a particular component. We will check whether the return value 
is same as passed value from UI. If that matches then test case is success.
*/
  it('should get update from product list', () => {

    let mockResponse = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
    ];

    mockProductService.updateProductApi.and.returnValue(of(mockResponse[0]));
    component.updateProduct(mockResponse[0]);
    expect(component.dataFromRes).toEqual(mockResponse[0]);

  });
});
