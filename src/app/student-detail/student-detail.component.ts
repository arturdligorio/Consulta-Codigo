import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { Student } from 'src/app/model/student.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student:Student

  constructor(private studentsService: StudentsService,private route: ActivatedRoute ) { }

  ngOnInit() {
    this.studentsService.studentsById(this.route.snapshot.params['id']).subscribe(student => this.student = student);   
  }

}
