import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressesComponent } from './address/addresses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddressesComponent],
  template: `
    <h1>Hello, {{ title }}</h1>
    <app-addresses></app-addresses>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'ng19';
}
