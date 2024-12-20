import { Component, computed, input } from '@angular/core';
import { Address } from '../types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-address',
  imports: [JsonPipe],
  template: `<p>address works!</p>
  {{ address() | json }}
  <hr>
  <strong>
          @if (isCreate()) {
            Dodajanje naslova
          } @else {
            Urejanje naslova
          }
        </strong>
  `  
})
export class AddressComponent {
  address = input.required<Address>();
  isCreate = computed(() => (this.address() ? false : true));
}
