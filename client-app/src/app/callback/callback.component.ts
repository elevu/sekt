import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TransactionsService} from "../transactions.service";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  localRouteUrl: string;

  constructor(private transactionsService: TransactionsService,
              private router: Router,
  ) {}

  ngOnInit() {
  }

  callAuthAppRouter() {
    this.transactionsService.getAuth(this.router.url.substring(15));
  }

}
