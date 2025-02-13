import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  products = [ 
    {id: 1, name: 'Phone XL', price: 799, description: 'A large phone with one of the best screens', quantity: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU'},
    {id: 2, name: 'Phone Mini', price: 699, description: 'A great phone with one of the best cameras', quantity: 10, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU'},
    {id: 3, name: 'Phone Standard', price: 299, description: 'phone test', quantity: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNfYPwLhCgRjjRjvAD06vY9QezBpftTyf_c9s6uG3pO8dhcroXwt3Yw7ei0tMYZ8ccpU&usqp=CAU'}
  ];

  id: any;
  product: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];  // Convert to number
    this.product = this.products.find(p => p.id === this.id);
  }
}
