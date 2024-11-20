import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Address } from '../types';
import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  const testAddress: Address = {
    id: 1,
    street: '123 Main St',
    city: 'Anytown',
    state: 'USA',
    zip: '12345',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('address', testAddress);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add user address', () => {
  //   spyOn(userArnesService, 'addUserAdresses').and.returnValue(of(void 0));
  //   spyOn(component.finished, 'emit');

  //   spyOn(userArnesService.userArnesUpdated$, 'next');

  //   // we set profile address without id
  //   fixture.componentRef.setInput('address', testProfileAddress);

  //   // we need trigger
  //   fixture.detectChanges();
  //   spyOn(component.addressForm, 'reset');

  //   const streetInput = fixture.debugElement.query(By.css('#street')).nativeElement;
  //   streetInput.value = 'testStreet';

  //   const postalCodeInput = fixture.debugElement.query(By.css('#postalCode')).nativeElement;
  //   postalCodeInput.value = 8263;

  //   const cityInput = fixture.debugElement.query(By.css('#city')).nativeElement;
  //   cityInput.value = 'Ljubljana';
  //   fixture.detectChanges();

  //   component.onSubmitAddress();
  //   fixture.detectChanges();

  //   expect(userArnesService.addUserAdresses).toHaveBeenCalled();
  //   expect(component.finished.emit).toHaveBeenCalled();
  //   expect(userArnesService.userArnesUpdated$.next).toHaveBeenCalled();
  //   expect(component.addressForm.reset).toHaveBeenCalled();
  // });
});
