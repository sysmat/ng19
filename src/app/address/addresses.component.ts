import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AddressService } from './address.service';

@Component({
  selector: 'app-addresses',
  template: `
    <h2>All Addresses</h2>
    @for (address of addresses(); track address.street) {
    <div class="address-card">
      <p>Street: {{ address.street }}</p>
      <p>City: {{ address.city }}</p>
      <p>State: {{ address.state }}</p>
      <p>ZIP: {{ address.zip }}</p>
      <hr />
    </div>
    }
  `,
})
export class AddressesComponent {
  private addressService = inject(AddressService);
  addresses = toSignal(this.addressService.getAddresses());
}
