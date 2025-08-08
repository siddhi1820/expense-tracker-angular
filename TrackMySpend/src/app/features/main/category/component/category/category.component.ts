import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../service/category.service';
import { CommonApiService } from '../../../../../core/services/common-api.service';

@Component({
  selector: 'app-category',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
categoryForm:FormGroup;
message:any;
categories:any;
constructor(private categoryService:CategoryService,private commonService:CommonApiService){
  this.categoryForm=new FormGroup({
    categoryName:new FormControl(null)
  })
}
public get category(){
  return this.categoryForm?.get('categoryName')
}
addCategory(){
 this.categoryService.addCategory(this.categoryForm?.value).subscribe({
  next:(res:any)=>{
    if(res){
     this.message=res?.message;
    }
   
  },error(err) {
      console.log(err);
  },
 })
  

}
viewCategory(){
  this.commonService.viewCategory().subscribe({
    next:(res:any)=>{
      if(res){
        this.categories=res?.data?.categorName;
      }
    },error(err) {
        console.log(err);
    },
  })
}
}
