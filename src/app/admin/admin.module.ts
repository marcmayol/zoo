import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from '../main/main.component';
import {ListComponent} from '../list/list.component';
import {AddComponent} from '../add/add.component';
import {EditComponent} from '../edit/edit.component';


@NgModule({
  declarations: [MainComponent, ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  exports: [MainComponent, ListComponent, AddComponent, EditComponent],
  providers: []
})
export class AdminModule {
}
