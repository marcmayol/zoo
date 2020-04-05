import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;

  constructor(
    // tslint:disable-next-line:variable-name
    _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    _router: Router
  ) {
    this.title = 'Login';
  }

  ngOnInit(): void {
  }

}
