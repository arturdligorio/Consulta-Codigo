import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import { StudentsComponent } from 'src/app/students/students.component';
import { StudentDetailComponent } from 'src/app/student-detail/student-detail.component';
import { LoginComponent } from 'src/app/login/login.component';

export const ROUTES: Routes = [
    {path: '',redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'students/:id', component: StudentDetailComponent},
    {path: 'login', component: LoginComponent}
  ]
  
