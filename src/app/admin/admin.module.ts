import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from '../main/main.component';
import {ListComponent} from '../list/list.component';
import {AddComponent} from '../add/add.component';
import {EditComponent} from '../edit/edit.component';
import {UserService} from '../services/user.service';
import {AdminGuard} from '../guards/admin.guard';
import {FiltroPipe} from '../pipes/filtro.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [MainComponent, ListComponent, AddComponent, EditComponent, FiltroPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  exports: [MainComponent, ListComponent, AddComponent, EditComponent],
  providers: [
    UserService,
    AdminGuard
  ]
})
export class AdminModule {
}
