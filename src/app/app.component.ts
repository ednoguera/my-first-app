import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Hello world"></app-title>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass'],
})
// eslint-disable-next-line import/prefer-default-export
export class AppComponent {
  title = 'Vamos para o Porto, ora pois!';
}
