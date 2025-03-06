import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router:Router,private ps:ProductServiceService){}

    title :string = "welcome4 arctic 5"
    color!:string
   products:any;
   ngOnInit(){
    this.products=this.ps.products;
   }
    show(){
      alert('hello')
    }
  
    buy(i:number){
      this.products[i].quantity--
    }
    };
  
  

