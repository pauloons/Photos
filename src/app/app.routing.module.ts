import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {Route, RouterModule} from '@angular/router';

const routes: RouterModule = [
  {path: 'user/flavio', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(<Route[]>routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
