import { Component } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { CommonApiService } from '../../../../../core/services/common-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message:any;
constructor(private readonly commonService:CommonApiService,private router:Router){
   this.commonService.getData().subscribe((data:any)=>{
  this.message=data;
   })
}
redirect(){
  console.log('click')
  this.router.navigate(['/auth/login'])
}
}
