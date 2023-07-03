import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngulardocComponent } from './extra/angulardoc/angulardoc.component';
import { BookadderComponent } from './pages/bookadder/bookadder.component';
import { BookviewerComponent } from './pages/bookviewer/bookviewer.component';
import { MybooksComponent } from './pages/mybooks/mybooks.component';

const routes: Routes = [
  {
    path: 'angular',
    component: AngulardocComponent
  },
  {
    path: 'addbook',
    component: BookadderComponent
  },
  {
    path: 'bookviewer',
    component: BookviewerComponent
  },
  {
    path: 'home',
    component: MybooksComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
