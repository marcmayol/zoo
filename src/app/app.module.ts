import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ModuloemailModule} from './moduloemail/moduloemail.module' ;
import {AdminModule} from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {TiendaComponent} from './tienda/tienda.component';
import {ParquesComponent} from './parques/parques.component';
import {AnimalsComponent} from './animals/animals.component';
import {ContactComponent} from './contact/contact.component';
import {KeepersComponent} from './keepers/keepers.component';
import {HomeComponent} from './home/home.component';
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {UserService} from './services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModuloemailModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'},
    UserService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
