import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pre-register-form',
  templateUrl: './pre-register-form.component.html',
  styleUrls: ['./pre-register-form.component.sass'],
})
export class PreRegisterFormComponent implements OnInit {
  preRegisterForm: FormGroup = this._FormBuilder.group({
    name: [''],
    email: [''],
    occupation: [''],
    interest: [''],
  });

  formPropertiesArray: any[] = [];

  constructor(private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPropertiesArray.push(
      Object.keys(
        this.preRegisterForm?.controls
      )
    )
  }

  public onSubmitForm(): void {
    console.log(this.preRegisterForm.value);
  }
}
