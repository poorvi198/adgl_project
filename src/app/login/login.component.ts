import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });
  }

  login(): void {
    const formData = new FormData();
    formData.append('username', this.loginForm.get('username').value);
    formData.append('password', this.loginForm.get('password').value);
    this.loginService.login(formData).subscribe(data => {
      if (data.result === 'login successful') {
        sessionStorage.setItem('isLogin', 'true');
        this.router.navigate(['/admin']);
      }
    });
  }
}
