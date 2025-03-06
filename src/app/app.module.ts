import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErroorComponent } from './erroor/erroor.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { FormProductComponent } from './form-product/form-product.component';
import{HttpClientModule}from"@angular/common/http";
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { FromResidenceComponent } from './from-residence/from-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    ErroorComponent,
    DetailProdComponent,
    LoginComponent,
    FormProductComponent,
    DetailsResidenceComponent,
    FromResidenceComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
