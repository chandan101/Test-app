import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts:any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  	//this.shippingCosts = this.cartService.getShippingPrices('/assets/shipping.json', {});
  	//Get Observable
    this.cartService.getShippingPrices('/assets/shipping.json', {}).subscribe(data => {
      console.log('joinRequest data', data);
      this.shippingCosts = data;
    },
    err => {
      console.log('joinRequest error', err);
    });
  }

}
