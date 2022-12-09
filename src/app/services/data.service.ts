import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (
    private http: HttpClient
  ) { }

  getDataFromDatabase() {
    const url = 'https://reqres.in/api/users?page=2';
    return this.http.get(url);
  }
   
  createUser(name: string, jobTitle: string) {
    const url = 'https://reqres.in/api/users';
    const payload = {
      'name': name,
      'job': jobTitle
    }

    return this.http.post(url, payload);
  }
}
