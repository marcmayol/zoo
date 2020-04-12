import {Component, OnInit} from '@angular/core';
import {Animal} from '../models/animal.model';
import {AnimalService} from '../services/animal.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GLOBAL} from '../services/globals';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;
  public url: string;
  public keeper;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getAnimal();  }

  getAnimal() {
    this.route.params.forEach((params: Params) => {
      // @ts-ignore
      this.animalService.getAnimal(params['id']).subscribe(
        response => {
          // @ts-ignore
          if (!response.animal) {
            this.router.navigate(['/admin-panel']);
          } else {
            // @ts-ignore
            this.animal = response.animal;
            this.keeper = this.animal.user;
          }

        },
        error => {
          console.log(<any> error);
        });
    });
  }

}
