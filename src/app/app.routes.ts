import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ApplicationComponent } from './components/application/application.component';

export const ROUTES: Routes = [
    { path: 'home',         component: HomeComponent },
    { path: 'portfolio',    component: PortfolioComponent },
    { path: 'education',    component: EducationComponent },
    { path: 'projects',     component: ProjectsComponent },
    { path: 'app/:name',    component: ApplicationComponent },
    { path: '',             pathMatch: 'full', redirectTo: 'home' },
    { path: '**',           pathMatch: 'full', redirectTo: 'home' },
];