import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: [''],
  })

  public inputFormArray: any[] = [];

  public isUserAllowed: boolean = false;

  public user: {email: string; password: string;}[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user.push({
      email: this.loginForm?.value['email'],
      password: this.loginForm?.value['password'],
    })
    console.log(this.user[0])
    this.inputFormArray.push(Object.keys(this.loginForm?.controls));
    // this.validateUser(this.user[0]);
    console.log(this.isUserAllowed)
  }

  public onSubmitForm() {
    console.log(this.loginForm.controls);
    console.log(this.loginForm.value['email']);
    console.log(this.inputFormArray);
    this.validateUser(this.user[0])
  }

  public validateUser(user: {email: string; password: string}) {
    if (!user.email || !user.password) {
      this.isUserAllowed = false;
    } else if (user.password !== '123456') {
      this.isUserAllowed = false;
    } else {
      this.isUserAllowed = true;
    }
  }

}
