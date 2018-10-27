import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {TransactionsService} from "../transactions.service";
import {ITransaction} from "../dao/transaction.interface";
import {IAvailableBonus, IBonusConfiguration} from "../dao/availableBonus.interface";

@Injectable({
  providedIn: 'root'
})
export class EvaluatorsService {

  constructor(
    private transactionsService: TransactionsService
  ) { }

  getAuth(route: string){
   const body = JSON.stringify({
      code: route,
    });
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    console.log('evaluating bonuses');
    console.log(body);
//    this.httpService.post<any>('http://localhost:8080/code', body, httpOptions).subscribe(response => console.log(response));
  }

  getListOfBonusesSuggestions( transactions: ITransaction[], bonuses: IBonusConfiguration[]): IBonusConfiguration[] {
    const availableBonuses = [];
    bonuses.forEach(bonus => {
      let amountPerCompany = 0;
      transactions.forEach(transaction => {
          if(transaction.company.includes(bonus.company)){
            amountPerCompany += transaction.amount;
          }
      });
      if(bonus.amount>amountPerCompany)
      {
        availableBonuses.push(bonus);
      }
    });
    return availableBonuses;
  }

}
