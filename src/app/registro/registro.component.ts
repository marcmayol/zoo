import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public title: string;
  public user: User;
  public registerForm;
  public message: string;
  public status: boolean;

  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _userService: UserService
  ) {
    this.title = 'Registro';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      surname: new FormControl(this.user.surname, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    console.log();
  }

  onSubmit(value) {
    this.user = new User('',
      this.registerForm.value.name,
      this.registerForm.value.surname,
      this.registerForm.value.email,
      this.registerForm.value.password,
      'ROLE_USER',
      '');

    this._userService.register(this.user).subscribe(
      response => {
        if (response.user._id) {
          this.user = response.user;
          this.message = 'El registro se ha realizado correctamente, identificate con el email ' + this.user.email;
          this.status = true;
          this.registerForm.reset();
        } else {
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
          this.message = 'error al registrarme';
          this.status = false;
        }

      },
      error => {
        console.log(<any> error);
      }
    );

  }

}
