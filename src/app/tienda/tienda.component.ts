import {Component, OnInit, Output} from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreParque: string;
  public miParque;
  public texto: any;

  constructor() {
    this.titulo = 'mi tienda';
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

}
