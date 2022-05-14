import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  public registerForm: FormGroup = this.formBuilder.group({
    firstName: [''],
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  public onSubmitForm() {
    console.log(this.registerForm.value);
  }
}
