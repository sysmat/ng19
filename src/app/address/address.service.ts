import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../types';

const apiLocal = 'http://localhost:3000' as const;
const apiAddress = 'address' as const;

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly httpClient = inject(HttpClient);
  private addressesSubject = new BehaviorSubject<Address[]>([
    {
      city: 'Ljubljana',
      state: 'Slovenia',
      street: 'Koroška cesta 1',
      zip: '1000',
      id: 1,
    },
    {
      city: 'Maribor',
      state: 'Slovenia',
      street: 'Koroška cesta 2',
      zip: '2000',
      id: 2,
    },
  ]);
  addresses$ = this.addressesSubject.asObservable();

  addAddress(address: Address): void {
    const currentAddresses = this.addressesSubject.value;
    this.addressesSubject.next([...currentAddresses, address]);
  }

  updateAddress(updatedAddress: Address): void {
    const currentAddresses = this.addressesSubject.value;
    const updated = currentAddresses.map((address) =>
      address.street === updatedAddress.street ? updatedAddress : address
    );
    this.addressesSubject.next(updated);
  }

  getAddresses(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(`${apiLocal}/${apiAddress}`);
  }

  deleteAddress(addressToDelete: Address): void {
    const currentAddresses = this.addressesSubject.value;
    const filtered = currentAddresses.filter(
      (address) => address.street !== addressToDelete.street
    );
    this.addressesSubject.next(filtered);
  }
}
