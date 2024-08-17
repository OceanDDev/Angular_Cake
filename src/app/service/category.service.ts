import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CategoryService {
  url = 'https://server-cake-8uhd.vercel.app/'
  constructor(private httpClient: HttpClient) { }
  
  getAll() {
    return this.httpClient.get(`${this.url}/categories/home`)
  }

  
}