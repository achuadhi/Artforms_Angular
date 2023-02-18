import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent } from './pages/artforms/artforms.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path: '',component: HomePageComponent
  },
  {
    path:'contact', component: ContactsComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'signin', component: SigninComponent
  },
  {
    path:'artforms', component:ArtformpageComponent
  },
   {
     path:'single-page', component:SinglepageComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
