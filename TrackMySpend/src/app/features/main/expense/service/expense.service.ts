import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi } from '../../../../shared/common.constant';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
apiUrl=serverApi.apiUrl;
  constructor(private http:HttpClient) { }

  addExpense(formData:any){
     return this.http.post(`${this.apiUrl}/main/addExpense`,formData);
  }
  getExpense(){
    return this.http.get(`${this.apiUrl}/main/getExpense`);
  }
}
