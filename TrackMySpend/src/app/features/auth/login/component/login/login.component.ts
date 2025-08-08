import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;
constructor(private loginService:LoginService,private toastr:ToastrService,private router:Router){
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
  this.loginService.getLogin(this.loginForm?.value).subscribe({
    next:(res:any)=>{
      if(res){
        console.log(res);
         this.toastr.success('Login successful!', 'Success');
        localStorage.setItem('token',res?.token);
        localStorage.setItem('isUserLogin',res?.isUserLogin);
        localStorage.setItem('userName',res?.userName);
        this.router.navigate(['/main/dashboard'])

      }
    },error(err){const errorMessage = err?.error?.message || 'Something went wrong';
    console.log(errorMessage);
    }
  })
}
}
