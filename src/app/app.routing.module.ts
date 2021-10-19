import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotoListResolver} from "./photos/photo-list/photo-list.resolver";
import {PhotoCrudComponent} from "./photos/photo-crud/photo-crud.component";

const routes: Routes = [

  {path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }},
  {path: 'p/add', component: PhotoFormComponent},
  {path: 'p/crud', component: PhotoCrudComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

