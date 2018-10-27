import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  Eval
  constructor(
    private httpService: HttpClient
  ) { }

  getAuth(route: string){
   const body = JSON.stringify({
      code: route,
    });
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    console.log('..now posting');
    console.log(body);
    let transactions;
    this.httpService.post<any>('http://localhost:8080/code', body, httpOptions).subscribe(
      response =>{
        console.log(response);
        transactions=response[][][]
      }

    );

  }
}
