import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  public submitted = false;
  authError=''
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required]),
    })
    this.authService.getErrorMessage().subscribe(data=> {
      this.authError=data
    })
  }
  constructor(private authService:AuthService) {

  }
  submitLogin() {
   
    this.submitted = true;
    if(this.loginForm.valid) {
      this.submitted=false
      this.authService.signIn(this.loginForm.value['email'], this.loginForm.value['password'])
    }
  }
}
