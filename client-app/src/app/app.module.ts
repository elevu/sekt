import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CallbackComponent } from './callback/callback.component';
import {RouterModule, Routes} from "@angular/router";
import { CompletedPromotionsComponent } from './completed-promotions/completed-promotions.component';
import { MapComponent } from './map/map.component';
import { TopPromotionsComponent } from './top-promotions/top-promotions.component';
import { TopRetailersComponent } from './top-retailers/top-retailers.component';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CompletedPromotionsComponent,
    MapComponent,
    TopPromotionsComponent,
    TopRetailersComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
