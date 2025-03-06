import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  login =new FormControl('login', Validators.required);
  pswd =new FormControl('password', Validators.minLength(8));

  loginform= new  FormGroup({
    username: new FormControl('', Validators.required),
     password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    cin: new FormControl('', Validators.minLength(8)),
    phone: new FormControl('', Validators.minLength(8)),
  })

 save() {
   console.log(this.login.value);
   console.log(this.pswd.value);
 }
}
