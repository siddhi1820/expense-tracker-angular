import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi } from '../../../../shared/common.constant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
apiUrl=serverApi.apiUrl;
  constructor(private http:HttpClient) { }
  addCategory(formData:any){
    return this.http.post(`${this.apiUrl}/main/addCategory`,formData);
  }
  
}
