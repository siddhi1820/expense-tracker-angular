import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
constructor(private registerService:RegisterService){
  this.registerForm=new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null),
   

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

onRegister(){
 return this.registerService.getRegister(this.registerForm?.value).subscribe({
  next:(res:any)=>{
    if(res){
      console.log(res?.message);
     
    }
  },error(error){
    console.log(error.message);
  }
 });
}
}
