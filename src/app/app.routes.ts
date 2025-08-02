import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Protofolio } from './protofolio/protofolio';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default redirect
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path:'protofolio' ,component:Protofolio
  },
  {path:'**',component:Notfound}
];
