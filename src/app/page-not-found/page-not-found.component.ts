import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      page-not-found!
    </h3>
    <button routerLink="">GO HOME</button>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
