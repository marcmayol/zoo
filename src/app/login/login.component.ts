import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public loginForm;
  public user: User;
  public token;
  public message;
  public status;
  public public;

  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private  _router: Router,
    private userService: UserService
  ) {
    this.title = 'Login';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    if (this.userService.getidentiy() != null) {
      this._router.navigate(['/']);
    }
  }


  onSubmit() {
    this.user = new User('', '', '', this.loginForm.value.email, this.loginForm.value.password, 'ROLE_USER', '');
    this.userService.signup(this.user).subscribe(
      response => {
        if (!response.user || response.user._id) {
          this.token = response.token;
          this.user = response.user;
          this.message = 'El login se ha realizado correctamente';
          this.status = true;
          localStorage.setItem('token', this.token);
          localStorage.setItem('identity', JSON.stringify(this.user));
          this._router.navigate(['/']);
        } else {
          this.message = 'error al logarse';
          this.status = false;
        }
      },
      error => {
        console.log(error);
        this.message = 'error al logarse';
        this.status = false;
      }
    );

  }

}
