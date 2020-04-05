import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public title: string;

  constructor(
    // tslint:disable-next-line:variable-name
    _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    _router: Router
  ) {
    this.title = 'Registro';
  }

  ngOnInit(): void {
  }

}
