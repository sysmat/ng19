import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { Address } from './types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddressComponent],
  template: `
    <h1>Hello, {{ title }}</h1>
    <app-address [address]="address"></app-address>
    <router-outlet />
  `,  
})
export class AppComponent {
  title = 'ng19';
  address: Address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'USA',
    zip: '12345'
  };
}
