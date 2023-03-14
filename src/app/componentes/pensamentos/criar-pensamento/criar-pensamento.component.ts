import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Pensamento 1',
    autoria: 'Autor 1',
    modelo: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelar() {
    alert('Pensamento não criado!');
  }

}
