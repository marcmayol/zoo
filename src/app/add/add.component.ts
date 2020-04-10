import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Animal} from '../models/animal.model';
import {AnimalService} from '../services/animal.service';
import {UserService} from '../services/user.service';
import {UploadService} from '../services/upload.service';
import {GLOBAL} from '../services/globals';


@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AnimalService, UploadService]
})
export class AddComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public url: string;
  public identity;
  public token;
  public addForm;
  public message: string;
  public status: boolean;
  public filesToUpload: Array<File>;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private animalService: AnimalService,
    private uploadService: UploadService
  ) {
    this.title = 'Añadir';
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '2020', '', '', '');
    this.identity = this.userService.getidentiy();
    this.token = this.userService.getToken();
    this.addForm = new FormGroup({
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
  }

  onSubmit() {
    this.animal.name = this.addForm.value.name;
    this.animal.description = this.addForm.value.description;
    this.animal.year = this.addForm.value.year;
    this.animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if (response.animal._id) {
          this.animal = response.animal;
          if (this.addForm.value.image != null) {
            this.uploadService.makeFileRequest(this.url + '/upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'file')
              .then((result: any) => {
                this.animal.image = result.image;
                console.log(this.animal);
              });
          }
          this.router.navigate(['/admin-panel']);
        } else {
          this.animal = new Animal('', '', '2020', '', '', '');
          this.message = 'error al registra animal';
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
