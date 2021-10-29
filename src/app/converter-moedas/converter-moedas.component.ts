import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ConverterMoedasService} from "./converter-moedas.service";

interface Moeda {
  sigla: string;
  descricao: string;
}

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.css']
})
export class ConverterMoedasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private converterMoedasService: ConverterMoedasService) { }

  // Controla exibição do mat-card que mostra o resultado
  exibirResultado: boolean = false;

  // Lista de moedas para serem exibidas no componente select (combobox)
  moedas: Moeda[] = []

  // Armazena as moedas selecionadas no componente Select
  moedaOrigemSelecionada: string = '';
  moedaDestinoSelecionada: string = '';
  valorSelecionado: number = 0;

  // Armazena os valores calculados
  valorConvertido: number = 0.0;
  taxaConversao: number = 0.0;

  ngOnInit(): void {
    this.converterMoedasService.listarSimbolos().subscribe(data => {
      for (let symbol in data.symbols) {
        let moeda: Moeda = {
          sigla: data.symbols[symbol].code,
          descricao: data.symbols[symbol].description
        };
        this.moedas.push(moeda);
      }
    })
  }

  calcularConversao() {
    this.converterMoedasService.converterMoeda(this.moedaOrigemSelecionada, this.moedaDestinoSelecionada, this.valorSelecionado).subscribe(data => {
      this.valorConvertido = data.result;
      this.taxaConversao = data.info.rate
    });

    this.exibirResultado = true;
  }

  fecharResultado() {
    this.exibirResultado = false;
  }

}
