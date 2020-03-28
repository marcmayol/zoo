import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar email';
  emailContacto: string;

  constructor() {
  }


  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(): void {

    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
