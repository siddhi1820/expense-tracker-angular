import { Injectable } from '@angular/core';
import { serverApi } from '../../shared/common.constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  apiurl:any=serverApi.apiUrl;
  constructor(private http:HttpClient) { 

  }
  getData(){
    return this.http.get(this.apiurl,{ responseType: 'text' });
  }
   viewCategory(){
   return this.http.get(`${this.apiurl}/main/viewCategory`);
  }
}
