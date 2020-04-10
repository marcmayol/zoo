import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {GLOBAL} from './services/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit, DoCheck {
  public title: string;
  emailContacto;
  public token: string;
  public identity;
  public url;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.title = 'NGZOO';
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
    this.token = this.userService.getToken();
    this.identity = this.userService.getidentiy();
  }

  ngDoCheck(): void {
    // console.log('El DoCheck se ha ejecutado');
    this.emailContacto = localStorage.getItem('emailContacto');
    this.token = this.userService.getToken();
    this.identity = this.userService.getidentiy();
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.router.navigate(['/']);
  }
}
