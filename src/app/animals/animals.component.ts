import {Component, OnInit} from '@angular/core';
import {fadeIn} from '../animations';
import {AnimalService} from '../services/animal.service';
import {Animal} from '../models/animal.model';
import {GLOBAL} from '../services/globals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalService],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public url: string;

  constructor(
    private animalService: AnimalService
  ) {
    this.title = 'Animales';
    this.url = GLOBAL.url;
  }


  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.getAnimals().subscribe(res => {
      // @ts-ignore
      if (res.animals) {
        // @ts-ignore
        this.animals = res.animals;
      }
    });
  }

}
