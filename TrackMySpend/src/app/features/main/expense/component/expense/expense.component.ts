import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense',
  imports: [ReactiveFormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  expenseForm:FormGroup;
  constructor(){
        this.expenseForm=new FormGroup({
          title:new FormControl(null),
          amount:new FormControl(null),
          date:new FormControl(null),
          category:new FormControl(null)
        })
  }
submitExpense(){

}
}
