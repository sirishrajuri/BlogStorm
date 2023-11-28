import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm!:FormGroup
  public submitted = false;
  confirmPassword =false
  authError=''
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword':new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
    this.authService.getErrorMessage().subscribe(data=> {
      this.authError=data
    })
  }
  constructor(private authService:AuthService) {

  }
  submitLogin() {
    this.confirmPassword=false
    if (this.loginForm.value.password !== this.loginForm.value.confirmPassword) {
      this.confirmPassword=true
      return;
    }
    this.submitted=true
    if(this.loginForm.valid) {
      this.submitted=false
      this.authService.signUp(this.loginForm.value['email'], this.loginForm.value['password'])
    }
  }
}
