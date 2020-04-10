import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {UploadService} from '../services/upload.service';
import {GLOBAL} from '../services/globals';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UploadService]
})
export class UserEditComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public userEditForm;
  public status;
  public message;
  public filesToUpload: Array<File>;
  public url;


  constructor(
    private userService: UserService,
    private uploadService: UploadService
  ) {
    this.url = GLOBAL.url;
    this.title = 'Actualizar mis datos';
    this.identity = this.userService.getidentiy();
    this.token = this.userService.getToken();
    this.user = this.identity;
    this.userEditForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      surname: new FormControl(this.user.surname, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required
      ]),
      avatar: new FormControl(this.user.image)
    });
  }

  ngOnInit(): void {

  }

  ngOnSubmit() {
    this.user.name = this.userEditForm.value.name;
    this.user.surname = this.userEditForm.value.surname;
    this.user.email = this.userEditForm.value.email;
    this.userService.userUpdate(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = false;
          this.message = 'error para actualizar';
        } else {
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.status = true;
          this.message = 'usuario actualizado';
          //subida de la imagen
          this.uploadService.makeFileRequest(this.url + '/upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'file')
            .then((result: any) => {
              this.user.image = result.image;
              localStorage.setItem('identity', JSON.stringify(this.user));
              console.log(this.user);
            });

        }

      },
      error => {
        var errnoMessage = <any> error;
        if (errnoMessage != null) {
          this.status = false;
          this.message = 'error para actualizar' + errnoMessage;

        }
      }
    );

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
