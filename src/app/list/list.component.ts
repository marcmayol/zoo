import {Component, OnInit} from '@angular/core';
import {Animal} from '../models/animal.model';
import {AnimalService} from '../services/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {fadeLateral} from '../admin/animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [fadeLateral]
})
export class ListComponent implements OnInit {
  public title: string;
  public token: string;
  public animals: Animal[];
  public busqueda;

  constructor(
    private userService: UserService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
  ) {
    this.title = 'listado';
    this.token = this.userService.getToken();
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

  deleteAnimal(id) {
    this.animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        // @ts-ignore
        if (!response.animal) {
          console.log('error en el servidor');
        }
        this.getAnimals();
      }, error => {
        console.log(<any> error);
      });

  }
}
