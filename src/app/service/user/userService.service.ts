import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private api = "https://server-cake-8uhd.vercel.app/"

constructor(private http: HttpClient, private cookie: CookieService) { }

getUserInfor(id:any) {
  const token = this.cookie.get("access_token")
  const headers = { 'Authorization':"Bearer " +token}
  return this.http.get(`${this.api}users/${id}`,{headers})
}



}


