import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddressComponent],
  template: `
    <h1>Hello, {{ title }}</h1>
    <app-address></app-address>
    <router-outlet />
  `,  
})
export class AppComponent {
  title = 'ng19';
}
