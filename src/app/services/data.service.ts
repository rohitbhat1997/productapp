import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let product = [
      { id: 1, productName: 'Product 1', amount: 1000, description: 'Product with great specifications1.' },
      { id: 2, productName: 'Product 2', amount: 2000, description: 'Product with great specifications2.' },
      { id: 3, productName: 'Product 3', amount: 3000, description: 'Product with great specifications3.' },
      { id: 4, productName: 'Product 4', amount: 4000, description: 'Product with great specifications4.' },
      { id: 5, productName: 'Product 5', amount: 5000, description: 'Product with great specifications5.' },
      { id: 6, productName: 'Product 6', amount: 6000, description: 'Product with great specifications6.' },
      { id: 7, productName: 'Product 7', amount: 7000, description: 'Product with great specifications7.' },
      { id: 8, productName: 'Product 8', amount: 8000, description: 'Product with great specifications8.' }
    ];


    return { product };

  }
}
