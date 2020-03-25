import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreParque: string;
  public miParque;

  constructor() {
    this.titulo = 'mi tienda';
  }

  ngOnInit(): void {
  }

  mostrarNombre() {
    console.log(this.nombreParque);
  }

  verDatosPadre(event) {
    console.log(event);
    this.miParque = event;
  }

}
