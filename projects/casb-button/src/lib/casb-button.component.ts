import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-casb-button',
  template: `<button (click)="go()">¡Vamos!</button>`,
  styles: [
    `button {
      color: #2ecc71;
      border-radius: 6px;
      font-family: 'Roboto';
      font-size: 2em;
      padding: 5px 10px;
      text-decoration: none;
    }`
  ]
})
export class CasbButtonComponent implements OnInit {

  @Input() url = '';

  constructor() { }

  ngOnInit() {
  }

  go() {
    window.location.href = this.url;
  }

}
