import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  constructor(private ps:ProductServiceService){}

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    img: new FormControl('', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))')])
  });
  submit() {
    this.ps.addProduct(this.productForm.value);
      console.log('Product data:', this.productForm.value);
  }

}
