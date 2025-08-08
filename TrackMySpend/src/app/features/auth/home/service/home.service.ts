import { Injectable } from '@angular/core';
import { CommonApiService } from '../../../../core/services/common-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly commonService:CommonApiService) {
   
   }
  

}
