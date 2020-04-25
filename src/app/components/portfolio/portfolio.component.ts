import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {
  items: Item[] = [
    {
      name        : 'App: Corte de Junín',
      description : 'App: Corte de Junín',
      image       : 'assets/img/portfolio/app-corte-junin.jpg',
      url         : 'https://play.google.com/store/apps/details?id=pe.gob.csjjunin.app.cortejunin',
    },
    {
      name        : 'App: IMC Calculator',
      description : 'App: IMC Calculator',
      image       : 'assets/img/portfolio/app-imc-calculator.jpg',
      url         : '#',
    },
    {
      name        : 'Web: Corte de Junín',
      description : 'Web: Corte de Junín',
      image       : 'assets/img/portfolio/corte-junin.jpg',
      url         : 'http://csjjunin.gob.pe/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Item {
  name        : string;
  description : string;
  image       : string;
  url         : string;
}