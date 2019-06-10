import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

constructor(public studentsService:StudentsService) { }

ngOnInit() {}

orderBy(field:string, type: string = 'asc'){
  this.studentsService.getStudentsOrderBy(field,type);
}


}
