import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  searchValue :string="";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/téléchargement (3).jfif", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/téléchargement.jfif", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/téléchargement (1).jfif", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/téléchargement (2).jfif", status: "En Construction"}
    ];
    filteredResidences: Residence[] = [...this.listResidences];

filter() {
  this.filteredResidences = this.listResidences.filter(res => 
    res.address.toLowerCase().includes(this.searchValue.toLowerCase())
  );
}


toggleLike(residence: Residence) {
  residence.liked = !residence.liked;
}

show(i: number) {
 
  if (this.listResidences[i].address=="inconnu"){
    alert("inconnu")
  }else{
alert( this.listResidences[i].address)}}

}
