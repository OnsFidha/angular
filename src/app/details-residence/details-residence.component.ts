import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent {
  id: any;
  residence: any;

  constructor(private activatedRoute: ActivatedRoute,private res:ResidenceService) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];  
    this.residence = this.res.getResidenceById(this.id);
    console.log(this.residence)
  }
}
