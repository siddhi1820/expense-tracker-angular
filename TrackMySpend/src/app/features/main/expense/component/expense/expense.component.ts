import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExpenseService } from '../../service/expense.service';
import { CategoryService } from '../../../category/service/category.service';
import { CommonApiService } from '../../../../../core/services/common-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
  expenseForm:FormGroup;
  categories:any=[];
  constructor(private expenseService:ExpenseService,private commonService:CommonApiService){
        this.expenseForm=new FormGroup({
          title:new FormControl(null),
          amount:new FormControl(null),
          date:new FormControl(null),
          category:new FormControl(null)
        })
      
  }
  ngOnInit(){
  
  this.commonService.viewCategory().subscribe({
    next:(res:any)=>{
     if(res){
       this.categories=res?.data;
       console.log(this.categories)
      
           }
    },error(err){
      console.log(err);
    }
  });

  }
addExpense(){
   this.expenseService.addExpense(this.expenseForm?.value).subscribe({
    next:(res:any)=>{
      if(res){
        console.log(res?.data);
      }
    },error(err){
       console.log(err.message);
    }
   })
}
}
