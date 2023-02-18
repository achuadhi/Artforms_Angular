import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ArtformpageComponent } from './pages/artforms/artforms.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { CarouselComponent } from './units/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsComponent,
    ArtformpageComponent,
    SigninComponent,
    SignupComponent,
    ContactsComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
