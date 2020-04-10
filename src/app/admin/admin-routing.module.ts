import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '../main/main.component';
import {ListComponent} from '../list/list.component';
import {AddComponent} from '../add/add.component';
import {EditComponent} from '../edit/edit.component';
import {AdminGuard} from '../guards/admin.guard';

const adminRoutes: Routes = [
  {
    canActivate: [AdminGuard ],
    path: 'admin-panel', component: MainComponent,
    children: [
      {path: '', component: ListComponent},
      {path: 'listado', component: ListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'editar', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
