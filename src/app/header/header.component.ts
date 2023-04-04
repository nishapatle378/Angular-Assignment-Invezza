import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public objectData:any = {};
  constructor(private http: HttpClient, private apiservice: ApiserviceService, private router:Router) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token') as string;
    this.objectData = this.decodificarJwt(token);
    console.log(this.objectData, "objectData");


  }
  private decodificarJwt(token:string):any{
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }


}
