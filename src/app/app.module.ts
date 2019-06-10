import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/app.routes';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentsService } from 'src/app/service/students.service';
import { AboutService } from 'src/app/service/about.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatorService } from 'src/app/service/authenticator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    StudentComponent,
    StudentDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StudentsService, AboutService, AuthenticatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
