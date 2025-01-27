import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,title: 'Home' },
  { path: 'about', component: AboutComponent,title: 'About' },
  { path: 'portfolio', component: PortfolioComponent ,title: 'Portfolio'},
  { path: 'contact', component: ContactComponent,title: 'Contact' },

];
