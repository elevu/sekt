import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router,
              private httpService: HttpClient,
  ) {}

  ngOnInit() {
  }

body = JSON.stringify({
    code: this.router.url.substring(15),
});
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  getAuth(){
    console.log('..now posting');
    console.log(this.body);
    this.httpService.post<any>('http://localhost:8080/code', this.body).subscribe(response => console.log(response));
  }
}
