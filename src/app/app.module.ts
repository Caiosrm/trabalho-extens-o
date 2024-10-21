import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalProdutoComponent } from './modal/modal-produto/modal-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ModalProdutoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
