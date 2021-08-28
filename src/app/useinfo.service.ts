import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UseInfoService {


  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    const url = "https://api.github.com/users"
    return this.http.get<any>(url)
  }
}
