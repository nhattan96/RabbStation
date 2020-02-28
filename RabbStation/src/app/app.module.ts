import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './components/home/home.component';
import {
  NavComponent
} from './components/nav/nav.component';
import {
  HeaderComponent
} from './components/header/header.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  CarouselComponent
} from './components/carousel/carousel.component';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HotProductComponent } from './components/home/hot-product/hot-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/home/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_athentication';
import { CategoriesComponent } from './components/home/category/categories/categories/categories.component';
import { ProductComponent } from './components/home/category/categories/categories/product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CarouselComponent,
    HotProductComponent,
    FooterComponent,
    CategoryComponent,
    LoginComponent,
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
