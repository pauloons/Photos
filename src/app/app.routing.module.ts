import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './errors/not-found/not-found.component';

const routes: RouterModule = [
  {path: 'user/:userName', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(<Route[]>routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
