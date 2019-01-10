import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-listas-prontas',
  templateUrl: './listas-prontas.component.html',
  styleUrls: ['./listas-prontas.component.sass']
})
export class ListasProntasComponent implements OnInit {

  mensagemInicial = 'Cada lista tem um nome que foi dado especificamente pelo usuário que a criou.';


  constructor() { }

  ngOnInit() {
  }

  

}
