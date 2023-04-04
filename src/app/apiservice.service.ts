import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiKey = 'ed89403b96f5e0949348a02e39e803983f9f61d5';
  private apiUrl = '/api'; // Use the proxy URL

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    const url = `${this.apiUrl}/characters/?api_key=${this.apiKey}&format=json`;
    return this.http.get(url)

  }

  // getComicVineData() {
  //   return this.http.get<any>('https://comicvine.gamespot.com/api/characters/?api_key=ed89403b96f5e0949348a02e39e803983f9f61d5&format=json');
  // }
}
