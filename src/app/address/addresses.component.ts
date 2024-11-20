import { Component, computed, input } from '@angular/core';
import { Address } from '../types';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-addresses',
  imports: [JsonPipe],
  template: `<p>address works!</p>
  {{ address() | json }}
  <hr>  
  `  
})
export class AddressesComponent {
  address = input.required<Address>();
  
}
