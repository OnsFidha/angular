import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {
  searchValue: string = "";
  listResidences: Residence[] = [];
  filteredResidences: Residence[] = [];
  likedResidences: Residence[] = [];

  constructor(private re: ResidenceService) {}

  filter() {
    this.filteredResidences = this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  ngOnInit() {
    this.getRes(); // Call the method to fetch residences
  }

  getRes() {
    this.re.getResidence().subscribe(
      (data) => {
        this.listResidences = data;  
        this.filteredResidences = [...this.listResidences];  
        console.log(data);  
      },
      (error) => {
        console.error('Erreur lors de la récupération des résidences :', error);
      }
    );
  }

  toggleLike(residence: Residence) {
    residence.liked = !residence.liked;
    
    if (residence.liked) {
      if (!this.likedResidences.includes(residence)) {
        this.likedResidences.push(residence);
      }
    } else {
      const index = this.likedResidences.indexOf(residence);
      if (index > -1) {
        this.likedResidences.splice(index, 1);
      }
    }
  }

  show(i: number) {
    if (this.listResidences[i].address === "inconnu") {
      alert("Adresse inconnue");
    } else {
      alert(this.listResidences[i].address);
    }
  }
}
