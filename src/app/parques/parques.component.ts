import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit(): void {
    console.log('metodo oninit lanzado');
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    console.log('Existen cambios en las propiedades');
  }

  ngOnDestroy(): void {
    console.log("Se va a eliminar el componente");
  }


  emitirEvento() {
    this.pasameLosDatos.emit(
      {
        nombre: this.nombre,
        metros: this.metros,
        vegetacion: this.vegetacion,
        abierto: this.abierto
      }
    );
  }
}
