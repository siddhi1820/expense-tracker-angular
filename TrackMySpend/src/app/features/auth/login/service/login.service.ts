import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverApi } from '../../../../shared/common.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl=serverApi.apiUrl;
  constructor(private http:HttpClient) { }
  getLogin(formData:any){
    return this.http.post(`${this.apiUrl}/auth/login`,formData);
  }
}
