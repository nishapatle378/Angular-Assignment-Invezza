import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router) { }

  // ngAfterViewInit(): void {
   
  // }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "588980684484-706k0a97uem6kc58hteqh7apqpddj51r.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
     
    
  }
  handleCredentialResponse(response:any){
    console.log(response);
   
    if(response.credential){
  
      sessionStorage.setItem("token", response.credential)
      document.location.href="/home";
    }
  }
}
