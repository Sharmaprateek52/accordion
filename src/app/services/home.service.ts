import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getAccord() {
    return this.httpClient.get(`http://localhost:3000/home`);
  }
}
