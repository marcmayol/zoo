import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardarEmailComponent } from '../guardar-email/guardar-email.component';
import { MostrarEmailComponent } from '../mostrar-email/mostrar-email.component';
import { MainEmailComponent } from '../main-email/main-email.component';



@NgModule({
  declarations: [GuardarEmailComponent, MostrarEmailComponent, MainEmailComponent],
  imports: [
    CommonModule
  ]
})
export class ModuloemailModule { }
