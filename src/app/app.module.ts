import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RegistrationComponent } from './registration/registration.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', redirectTo: 'carlist', pathMatch: 'full'},
  {path: 'carlist', component: CarListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
