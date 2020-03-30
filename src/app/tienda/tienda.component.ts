import {Component, OnInit, Output} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreParque: string;
  public miParque;
  public texto: any;
  public status;

  constructor() {
    this.titulo = 'mi tienda';
    this.status = 'inactive';
  }

  ngOnInit(): void {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      console.log('click desde jquery');
      $('#textojq').show();
    });
    $('#caja').dotdotdot({});
  }

  mostrarNombre() {
    console.log(this.nombreParque);
  }

  verDatosPadre(event) {
    console.log(event);
    this.miParque = event;
  }

  textoRichEditor() {
    console.log(this.texto);
  }

  cambiarEstado(status) {
    if (status === 'inactive') {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }

  }

}
