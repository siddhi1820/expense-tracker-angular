import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
categoryForm:FormGroup;
categories:any=[];
constructor(){
  this.categoryForm=new FormGroup({
    categoryName:new FormControl(null)
  })
}
public get category(){
  return this.categoryForm?.get('categoryName')
}
addCategory(){
  console.log(`Category Added Sucessfully.`)
  this.categories.push(this.categoryForm?.value);
}
editCategory(){

}
deleteCategory(){
  
}
}
