import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu= {
    logo:'https://cdn0.iconfinder.com/data/icons/fitness-95/24/weightlifting-256.png',
    itens:[
      {icone:'https://cdn1.iconfinder.com/data/icons/real-estate-building-flat-vol-1/104/building__house__home__real__estate-256.png',texto:'Inicio'},
      {icone:'https://cdn1.iconfinder.com/data/icons/shopping-115/32/ask-question-256.png',texto:'Sobre'},
      {icone:'https://cdn2.iconfinder.com/data/icons/wirecons-free-vector-icons/32/475339-picture-256.png',texto:'Galeria'},
      {icone:'https://cdn1.iconfinder.com/data/icons/neutro-essential/32/email-256.png',texto:'Contato'}
    ]
  }
  constructor() { }

  ngOnInit() {}

}
