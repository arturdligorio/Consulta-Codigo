import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { Observable } from 'rxjs'


import { FACELIST_API } from '../app.api'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class StudentsService {

  listStudent: Student[] = [];

  constructor(private http: HttpClient) {
    //Para inicializar a lista
    this.getStudentsData(`${FACELIST_API}/students`);
  }

  getStudentsData(url: string) {
    this.getStudentsUrl(url).subscribe(
      listStudentServer => {
        console.log('Carregando a lista de alunos no studentsService')
        this.listStudent = listStudentServer;
      }
    );
  }

  getStudentsUrl(url: string): Observable<Student[]> {
    return this.http.get<Student[]>(url);
  }

  getStudentsOrderBy(field: string, type: string = 'asc') {
    if (type === 'desc') {
      this.getStudentsData(`${FACELIST_API}/students?_sort=${field}&_order=desc`);
    } else {
      this.getStudentsData(`${FACELIST_API}/students?_sort=${field}&_order=asc`);
    }
  }

  getStudentsByField(field: string, search: string) {
    this.getStudentsData(`${FACELIST_API}/students?${field}_like=${search}`);
  }

  getStudentsByAllField(search: string) {
    this.getStudentsData(`${FACELIST_API}/students?q=${search}`);
  }

  studentsById(id: string): Observable<Student> {
    return this.http.get<Student>(`${FACELIST_API}/students/${id}`)

  }


}
