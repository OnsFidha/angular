import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent implements OnInit {
  id: any;
  residence: any;

  constructor(private activatedRoute: ActivatedRoute, private res: ResidenceService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];  
    this.res.getResidenceById(this.id).subscribe(
      (data) => {
        this.residence = data;  // Assignez correctement la réponse ici
        console.log(this.residence);
      },
      (error) => {
        console.error('Erreur lors de la récupération de la résidence :', error);
      }
    );
  }
}
