import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { AuthenticatorService } from 'src/app/service/authenticator.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public studentsService:StudentsService, public auth:AuthenticatorService) { }

  ngOnInit() {
  }

}
