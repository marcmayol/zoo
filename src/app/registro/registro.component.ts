import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public title: string;
  public user: User;
  public registerForm;

  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
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
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.registerForm);
    console.log(this.user);

  }

}
