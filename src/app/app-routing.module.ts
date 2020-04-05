import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TiendaComponent} from './tienda/tienda.component';
import {HomeComponent} from './home/home.component';
import {AnimalsComponent} from './animals/animals.component';
import {ContactComponent} from './contact/contact.component';
import {KeepersComponent} from './keepers/keepers.component';
import {RegistroComponent} from './registro/registro.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'animales', component: AnimalsComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'cuidadores', component: KeepersComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
