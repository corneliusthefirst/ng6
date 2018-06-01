import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// adding my router components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// here we define our paths
const routes: Routes = [
 {
   path: '',
   component: HomeComponent
 },
 {
  path: 'about/:id',
  component: AboutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
