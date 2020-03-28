import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit, DoCheck {
  title = 'Guardar email';
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
