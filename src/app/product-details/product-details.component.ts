import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  product : any;
  time: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
    	this.product = products[+params.get('productId')];
  	});

    this.time = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
