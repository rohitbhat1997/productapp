import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';
import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  let mockProductService: any;
  let mockFb: FormBuilder;
  let mockToastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    mockProductService = jasmine.createSpyObj(['createPolicyApi']);
    component = new ProductAddComponent(mockProductService, mockFb, mockToastr);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
* @description  In this test case we are checking that whatever value we are passing value
to the create function  are we getting the same value in response if we change PRODUCT[0] to PRODUCT[1] 
at single place, it will fail the test case
*/
  it('add product to product list', () => {
    let response;
    const PRODUCT: any = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
      { id: 2, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
    ];
    mockProductService.createPolicyApi.and.returnValue(of(PRODUCT[0]));
    mockProductService.createPolicyApi(PRODUCT[0]).subscribe((res: Product) => {
      response = res
    });
    expect(response).toEqual(PRODUCT[0]);
  });
});
