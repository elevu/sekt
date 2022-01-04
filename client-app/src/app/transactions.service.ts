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

    const payLoad: any = {
      "accounts": [
        "87fa44ec11c4426e889a963add92b69e"
      ],
      "categories": [
        "953c4eda24554a61a9653a479e70fc96"
      ],
      "credentials": [
        "18bb1f4636894f3bba8ddcd567d22fbd"
      ],
      "endDate": 1455740874875,
      "externalIds": [
        "953c4eda24554a61a9653a479e70fc96"
      ],
      "includeUpcoming": false,
      "limit": 20,
      "offset": 20,
      "order": "ASC",
      "queryString": "Food this week",
      "sort": "DATE",
      "startDate": 1455740874875
    };

    this.httpService.post<any>(
      'http://localhost:8080/code',
            body,
            httpOptions)
      .subscribe(response => console.log(response));
  }

}
