import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { CardViewComponent } from './card-view.component';

describe('CardViewComponent', () => {
  let component: CardViewComponent;
  let fixture: ComponentFixture<CardViewComponent>;
  let mockProductService: any;
  let mockToastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ProductService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => {
    mockProductService = jasmine.createSpyObj(['getProductListApi']);
    component = new CardViewComponent(mockProductService, mockToastr);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
* @description This unit test case will return the value which is present in DB , in this test
* case when we are calling getProductList() we can expect [] as it is returnValue , 
* if we want to return array of objects we can pass the same in returnValue and then call the function 
* and expect same in component.storedData.
*/
  it('get product list for card view', () => {
    mockProductService.getProductListApi.and.returnValue(of([]));
    component.getProductList();
    expect(component.storedData).toEqual([]);

  });
});
