import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  beforeEach(() => {
    service = new ProductService(mockHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
* @description  In this test case we are getting 3 objects in array , when we call the service, similarly if we
pass 2 objects and expect return of 3 , the test case will fail. 
*/
  it('testing service for getting data ', () => {
    let mockResponse: any = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
      { id: 2, productName: 'Product 2', amount: 2000, description: 'Product with great specifications.' },
      { id: 3, productName: 'Product 3', amount: 3000, description: 'Product with great specifications.' },
    ];

    let response;
    spyOn(service, 'getProductListApi').and.returnValue(of(mockResponse))
    service.getProductListApi().subscribe(res => {
      response = res
    });
    expect(response).toEqual(mockResponse);
  });

  /**
* @description  In this test case we are checking that whatever value we are passing 
to the create createPolicyApi  are we getting the same value in response i.e we are expecting same 
value in return 
*/
  it('testing service for posting  data ', () => {
    let mockResponse: any = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
    ];

    let response;
    spyOn(service, 'createPolicyApi').and.returnValue(of(mockResponse))
    service.createPolicyApi(mockResponse).subscribe(res => {
      response = res
    });
    expect(response).toEqual(mockResponse);
  });

  /**
  * @description  In this test case we are checking that whatever id we are passing 
  to the  deleteProductApi  are we getting the same id in response i.e we are expecting same 
  value in return 
  */
  it('testing service for deleting data  ', () => {
    const id = 3;
    let response: any;
    spyOn(service, 'deleteProductApi').and.returnValue(of(id))
    service.deleteProductApi(id).subscribe(res => {
      response = res
    });
    expect(response).toEqual(id);
  });
  /**
  * @description  In this test case we are checking that whatever mockResponse we are passing 
  to the  updateProductApi  are we getting the same mockResponse i.e we are expecting same 
  value in return 
  */
  it('testing service for updating data  ', () => {
    let mockResponse: any = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications.' },
    ];
    let response: any;
    spyOn(service, 'updateProductApi').and.returnValue(of(mockResponse[0]))
    service.updateProductApi(mockResponse[0]).subscribe(res => {
      response = res
    });
    expect(response).toEqual(mockResponse[0]);
  });


});
