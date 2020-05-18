import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  httpOptions: any;

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': '',
        'Device-Id': '',
        'Access-Control-Allow-Origin': '*'
      })
    };

  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(url, data) {
    return this.http.get('/assets/shipping.json');
    //return this.http.get('/assets/shipping.json', { headers: this.httpOptions.headers, params: data })
  }

  post(url, data): any {
    return this.http.post(url, data, this.httpOptions);
  };

  
}
