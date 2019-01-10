import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.sass']
})
export class RodapeComponent implements OnInit {

	anoDesenvolvido = '@2019 - ';
	desenvolvedora = 'Marcielli Oliveira';

  constructor() { }

  ngOnInit() {
  }

}
