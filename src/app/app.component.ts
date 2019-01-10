import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SuperLista';
  mensagemInicial = 'Aqui você pode pegar uma lista de compra pronta já feita por outros usuários ou criar a sua personalizada.';
}
