import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErroorComponent } from './erroor/erroor.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { FormProductComponent } from './form-product/form-product.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { FromResidenceComponent } from './from-residence/from-residence.component';

const routes: Routes = [
  {path: 'residence',component: ResidencesComponentComponent},
  {path:'produit',component:HomeComponent},
  {path:'addProduit',component:FormProductComponent},
  {path:'addRes',component:FromResidenceComponent},

  {path:'login',component:LoginComponent},
  {path:'details/:id',component:DetailProdComponent},
  {path:'detail/:id',component:DetailsResidenceComponent},

  {path:'',redirectTo:'residence',pathMatch:'full'},
  {path:'**',component:ErroorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
