import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ListarSimbolosService} from "./listar-simbolos.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

export class Moeda {
  code: String = '';
  description: String = '';
}

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  moedas: Moeda[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['codigo', 'descricao'];

  constructor(private listarSimbolosService: ListarSimbolosService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.data = this.moedas;
    this.carregarMoedas();
  }

  carregarMoedas() {
    this.listarSimbolosService.listarSimbolos().subscribe(value => {
      for (let symbol in value.symbols) {
        let moeda: Moeda = new Moeda();
        moeda.code = value.symbols[symbol].code;
        moeda.description = value.symbols[symbol].description;
        this.moedas.push(moeda);
      }
      this.dataSource.data = this.moedas;
    });

  }

}
