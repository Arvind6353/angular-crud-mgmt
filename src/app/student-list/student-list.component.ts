
import {Component, OnInit} from '@angular/core'
import {Student} from '../interface/Student'
import {StudentService} from '../services/student-services'

@Component({
    selector : 'student-list',
    templateUrl : './student-list.component.html'
})
export class StudentListComponent implements OnInit{
    
        students: Student[]

        constructor(private studentService : StudentService) {
            this.students = [
                new Student(0, 'arvind'),
                new Student(1,'gayuuu'),
            ]
        }
        ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
          this.getStudentsList()
        }

        getStudentsList() {
           this.studentService.getStudentsList()
             .subscribe ( 
                students => {this.students = students} ,
                err => { console.log(err)} 
             ) 
        }

        deleteStudent(id) {
          this.studentService.deleteStudent(id)
            .subscribe(
                deletedDoc => { 
                    console.log('deleted student is',deletedDoc)
                    this.getStudentsList()
                },
                err => {console.log(err)}
            )
        }
}