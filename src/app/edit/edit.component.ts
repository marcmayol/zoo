import {Component, OnInit} from '@angular/core';
import {GLOBAL} from '../services/globals';
import {Animal} from '../models/animal.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {AnimalService} from '../services/animal.service';
import {UploadService} from '../services/upload.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [AnimalService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public url: string;
  public identity;
  public token;
  public editForm;
  public message: string;
  public status: boolean;
  public filesToUpload: Array<File>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private animalService: AnimalService,
    private uploadService: UploadService
  ) {
    this.title = 'Editar';
    this.url = GLOBAL.url;
    this.identity = this.userService.getidentiy();
    this.token = this.userService.getToken();
    this.animal = new Animal('', '', '2020', '', '', '');
    this.editForm = new FormGroup({
      name: new FormControl(this.animal.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      description: new FormControl(this.animal.description, [
        Validators.required,
        Validators.minLength(4)
      ]),
      year: new FormControl(this.animal.year, [
        Validators.required
      ]),
      image: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getAnimal();
  }

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
          }

        },
        error => {
          console.log(<any> error);
        });
    });
  }

  onSubmit() {
    this.animal.name = this.editForm.value.name;
    this.animal.description = this.editForm.value.description;
    this.animal.year = this.editForm.value.year;
    this.animalService.editAnimal(this.token, this.animal._id, this.animal).subscribe(
      response => {
        // @ts-ignore
        if (response.animal._id) {
          // @ts-ignore
          this.animal = response.animal;
          if (this.editForm.value.image != null) {
            this.uploadService.makeFileRequest(this.url + '/upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'file')
              .then((result: any) => {
                this.animal.image = result.image;
                console.log(this.animal);
              });
          }
          this.router.navigate(['/admin-panel']);
        } else {
          this.animal = new Animal('', '', '2020', '', '', '');
          this.message = 'error al actualizar animal';
          this.status = false;
        }

      },
      error => {
        console.log(<any> error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
