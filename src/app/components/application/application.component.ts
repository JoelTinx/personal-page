import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styles: [
  ]
})
export class ApplicationComponent implements OnInit {
  name = '';

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.name = this.getAppDescription(params['name']);
    });
  }

  ngOnInit(): void {
  }

  getAppDescription(name:string) {
    return 'IMC Calculator';
  }

}
