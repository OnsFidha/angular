import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-from-residence',
  templateUrl: './from-residence.component.html',
  styleUrls: ['./from-residence.component.css']
})
export class FromResidenceComponent {
  residenceForm: any;

  constructor(
    private fb: FormBuilder,
    private res: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Créer un formulaire réactif avec des contrôles et des validations
    this.residenceForm = this.fb.group({
      name: ['', Validators.required], // Nom de la résidence
      address: ['', Validators.required], // Adresse
      image: ['', Validators.required], // URL de l'image
      status: ['', Validators.required] // Statut
    });
  }

  // Méthode pour envoyer le formulaire
  onSubmit(): void {
    if (this.residenceForm.valid) {
      const newResidence = this.residenceForm.value;

      // Appel du service pour ajouter la résidence
      this.res.addResidence(newResidence).subscribe(
        (data) => {
          console.log('Résidence ajoutée avec succès', data);
          this.router.navigate(['/residence']); // Naviguer vers la liste des résidences après ajout
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la résidence :', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide');
    }
  }

}
