import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;
constructor(){
   this.loginForm=new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
   })
}

public get email(){
  return this.loginForm.get('email');
}
public get password(){
  return this.loginForm.get('password');
}
login(){
  console.log(this.loginForm?.value);
}
}
