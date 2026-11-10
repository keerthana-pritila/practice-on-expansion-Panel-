import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-address',
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class Address {
  //@Input() allows a child component to receive data from its parent
  @Input() title = '';
  @Input() addressForm!: FormGroup;

  //! -->it has value , parent will provide its value later so , it will not get initialization error.

  @Input() submitted = false; //The parent will tell the child whether the initial submission has happened.
  isEditing = false; //Initially, editing is disabled for each child.

  editAddress() {
    this.isEditing = true;
  }
  saveAddress() {
    this.isEditing = false;
  }
}
