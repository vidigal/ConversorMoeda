import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConverterMoedasService {

  constructor(private http: HttpClient) { }

  listarSimbolos(): Observable<any> {
    return this.http.get("https://api.exchangerate.host/symbols");
  }

  converterMoeda(siglaMoedaOrigem: string, siglaMoedaDestino: string, valor: number): Observable<any> {
    return this.http.get("https://api.exchangerate.host/convert" +
      "?from=" + siglaMoedaOrigem +
      "&to=" + siglaMoedaDestino +
      "&amount=" + valor);
  }
}
