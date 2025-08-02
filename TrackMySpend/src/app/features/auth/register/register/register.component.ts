import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
constructor(){
  this.registerForm=new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null),
    confirmPassword:new FormControl(null),

  })
}
public get name(){
  return this.registerForm?.get('name');
} 
public get email(){
  return this.registerForm?.get('email');
} 
public get password(){
  return this.registerForm?.get('password');
} 
public get confirmPassword(){
  return this.registerForm?.get('confirmPassword');
} 
onRegister(){
  console.log(this.registerForm?.value);
}
}
