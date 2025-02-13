import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title :string = "welcome4 arctic 5"
    color!:string
    products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        quantity : 2,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        quantity : 10,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: 'phone test ',
        quantity : 5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU',
      }
    ]
  
    show(){
      alert('hello')
    }
  
    buy(i:number){
      this.products[i].quantity--
    }
    };
  
  

