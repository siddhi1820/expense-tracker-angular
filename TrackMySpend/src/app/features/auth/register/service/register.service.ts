import { Injectable } from '@angular/core';
import { serverApi } from '../../../../shared/common.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 apiUrl=serverApi.apiUrl
  constructor(private readonly http:HttpClient) { }
  getRegister(formData:any){
   return this.http.post(`${this.apiUrl}/auth/register`,formData);
  }
}
