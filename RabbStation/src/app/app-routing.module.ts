import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HomeComponent
} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_athentication';
import { CategoriesComponent } from './components/home/category/categories/categories/categories.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'category/:categoryId',
    component: CategoriesComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
