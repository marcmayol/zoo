import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animations';
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animales';

  constructor() {
  }

  ngOnInit(): void {
    console.log('animals.component cargado !!');
  }

}
