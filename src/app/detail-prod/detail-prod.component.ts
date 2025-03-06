import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {


  id: any;
  product: any;

  constructor(private activatedRoute: ActivatedRoute,private ps:ProductServiceService) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];  
    this.product = this.ps.products.find(p => p.id === this.id);
  }
}
