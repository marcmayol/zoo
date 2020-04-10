import {Component, OnInit} from '@angular/core';
import {Animal} from '../models/animal.model';
import {AnimalService} from '../services/animal.service';

import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public title: string;
  numbers = new Array(10);
  public animals: Animal[];

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
  ) {
    this.title = 'listado';
  }

  ngOnInit(): void {
    console.log(this.animalService.getAnimals().subscribe(res => {
      // @ts-ignore
      if (res.animals) {
        // @ts-ignore
        this.animals = res.animals;
      }
    }));
  }
}
