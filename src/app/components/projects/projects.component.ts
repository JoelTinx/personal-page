import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {
  items: any[] = [
    {
      name        : 'Sopator',
      description : 'Sopator',
      image       : 'assets/img/apps/sopator.jpg',
      url         : 'https://github.com/JoelTinx/sopator',
    },
    {
      name        : 'GoCruz',
      description : 'GoCruz',
      image       : 'assets/img/apps/go-cruz.jpg',
      url         : 'https://github.com/JoelTinx/gocruz',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
