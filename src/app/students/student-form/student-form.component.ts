import { Component} from "@angular/core"
import {StudentService} from '../services/student-services'

@Component({
    selector : 'student-form',
    templateUrl : './student-form.component.html'
})
export class StudentFormComponent {

    studentname : string = ''
    
    constructor(private studentService :StudentService) {
    
    }

    createStudent() {
        this.studentService.createStudent(this.studentname)
        .subscribe(
            newStudent => {
                console.log('student added', newStudent);
            },
            err => {
                console.log(err);
            }
        )   
    }
} 