import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { ProductAddComponent } from './product-add.component';


describe('ProductAddComponent with formGroup testing', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, ToastrModule.forRoot(), FormsModule],
      providers: [ProductService]
    })
      .compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
* @description  In this test case we are checking the total count of input
elements in our form and that should match with the actual count of input present in our form. 
*/
  it('Test total number of input fields of Form Group', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#addProductForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
  });

  /**
* @description  In this test case we are checking the initial values of 
our product form group and matching it with our manually created productAddFormValues
*/
  it('Checking the Initial form values for product add form ', () => {
    const productAddFormGroup = component.addProductForm;
    const productAddFormValues = {
      productID: '',
      productName: '',
      price: '',
      description: ''
    }
    expect(productAddFormGroup.value).toEqual(productAddFormValues);
  });

  /**
* @description  In this test case we are able to get productName element from HTML 
We will assign some value to HTML element , emit the input event to update the HTML content.
We are then detecting the changes and once the component is stable and updated we will get
productName from formBuilder.Here, we expect both HTML element value and form control productName value to be equal.
*/
  it('Checking the productName form field value after entering some manual value', () => {
    const addProductFormProductName: HTMLInputElement = fixture.debugElement.nativeElement.
      querySelector('#addProductForm').querySelectorAll('input')[1];
    addProductFormProductName.value = 'TV';
    addProductFormProductName.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const productAddFormGroup = component.addProductForm.get('productName');
      expect(addProductFormProductName.value).toEqual(productAddFormGroup?.value);

    });
  });

  /**
* @description 
Step 1: Get all the  elements from HTML content using debugElement and querySeclector
Step 2: Fill all the values with  some sample content.
Step 3: Dispatching events on all field element for updating the value in the HTML fields.
Step 4: Get the  form group valid property.
Step 5: Expect the form group valid property to be true.
*/
  it('Checking the whole form fields by passing some values ', () => {
    const productId: HTMLInputElement = fixture.debugElement.nativeElement.
      querySelector('#addProductForm').querySelectorAll('input')[0];
    const productName: HTMLInputElement = fixture.debugElement.nativeElement.
      querySelector('#addProductForm').querySelectorAll('input')[1];
    const amount: HTMLInputElement = fixture.debugElement.nativeElement.
      querySelector('#addProductForm').querySelectorAll('input')[2];
    const description: HTMLInputElement = fixture.debugElement.nativeElement.
      querySelector('#addProductForm').querySelectorAll('input')[3];
    productId.value = '1';
    productName.value = 'Refrigerator';
    amount.value = '8000';
    description.value = 'Product With  new Specifications';

    productId.dispatchEvent(new Event('input'));
    productName.dispatchEvent(new Event('input'));
    amount.dispatchEvent(new Event('input'));
    description.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    const isValidForm = component.addProductForm.valid;
    fixture.whenStable().then(() => {
      expect(isValidForm).toBeTruthy()
    });
  });



});
