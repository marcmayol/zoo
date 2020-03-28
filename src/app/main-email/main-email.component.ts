import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {
  title = 'Mostrar email';
  emailContacto: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('contact.component cargado !!');
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }

}
