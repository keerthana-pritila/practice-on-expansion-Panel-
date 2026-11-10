import { Component, signal } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { Address } from './address/address';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [Address,ReactiveFormsModule,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practice');

  submitted = false;

  //office address form
officeForm = new FormGroup({
  pincode : new FormControl('', Validators.required),
  houseNo : new FormControl (''),
  city : new FormControl('')
});

  //home address form
  homeForm = new FormGroup({
  pincode : new FormControl('', Validators.required),
  houseNo : new FormControl (''),
  city : new FormControl('')
});

submitAddress() {
  this.officeForm.markAllAsTouched();
  this.homeForm.markAllAsTouched();

  if (this.officeForm.invalid || this.homeForm.invalid) {
    this.submitted = false;
    return;
  }

  this.submitted = true;

  console.log('Office Address:', this.officeForm.value);
  console.log('Home Address:', this.homeForm.value);
}
}
