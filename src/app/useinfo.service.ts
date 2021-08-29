import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UseInfoService {


  constructor(private http:HttpClient) { }

  getData(searchName:string="levi-opunga"):Observable<any> {
    let url = "https://api.github.com/users/" + searchName+'?access_token=' + "48ecd86f89944695011ce0760b21497d470f8b7e"
    return this.http.get<any>(url)
  }
}
