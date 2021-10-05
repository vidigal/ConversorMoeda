import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './template/topo/topo.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import { ConverterRealDolarComponent } from './converter-real-dolar/converter-real-dolar.component';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ListarSimbolosComponent,
    ConverterRealDolarComponent,
    ConverterMoedasComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent]
})
export class AppModule { }
