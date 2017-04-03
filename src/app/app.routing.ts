import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { AnimalsComponent } from './animals/animals.component';



const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
path: 'news',
component: NewsComponent
},
{
path: 'sports',
component: SportsComponent
},
{
path: 'animals',
component: AnimalsComponent
}

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
