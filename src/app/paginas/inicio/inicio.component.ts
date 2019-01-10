import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

	title = 'SuperLista';
  mensagemInicial = 'Aqui você pode pegar uma lista de compra pronta já feita por outros usuários ou criar a sua personalizada.';
  botaoEsquerdo = 'Listas Prontas';
  botaoDireito = 'Criar Listas';

  constructor() { }

  ngOnInit() {
  }

}
