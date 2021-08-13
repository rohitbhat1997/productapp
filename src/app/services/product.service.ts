import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getProductListApi() {
    return this.httpClient.get(this.SERVER_URL + 'product');
  }

  public deleteProductApi(productId: number) {
    return this.httpClient.delete(`${this.SERVER_URL + 'product'}/${productId}`)
  }

  public updateProductApi(product: { id: number, productName: string, amount: number, description: string }) {
    return this.httpClient.put(`${this.SERVER_URL + 'product'}/${product.id}`, product)
  }

  public createPolicyApi(product: { id: number, productName: string, amount: number, description: string }) {
    return this.httpClient.post(`${this.SERVER_URL + 'product'}`, product)
  }
}
