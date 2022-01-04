import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uhuuhuuuhuhuhuhu';

  constructor(
  ){

  }


navigateTo(){
  window.location.href = 'https://oauth.tink.se/0.4/authorize/?client_id=f9291bc8b7724ae3936cfe3221dd2c29&redirect_uri=http://localhost:3000/callback&scope=transactions:read&grant_type=authorization_code&market=SE&locale=en_US';
}
}
