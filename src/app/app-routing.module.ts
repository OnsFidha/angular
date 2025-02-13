import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErroorComponent } from './erroor/erroor.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';

const routes: Routes = [
  {path: 'residence',component: ResidencesComponentComponent},
  {path:'produit',component:HomeComponent},
  {path:'details/:id',component:DetailProdComponent},
  {path:'',redirectTo:'residence',pathMatch:'full'},
  {path:'**',component:ErroorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
