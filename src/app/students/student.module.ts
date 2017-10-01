import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';


import {StudentService} from './services/student-services'
import {StudentComponent} from './student.component'
import {StudentListComponent} from './student-list/student-list.component'
import {StudentFormComponent} from './student-form/student-form.component'

@NgModule({
    declarations: [StudentComponent, StudentListComponent, StudentFormComponent],
    imports: [ CommonModule, HttpModule , FormsModule],
    exports: [StudentComponent],
    providers: [StudentService],
})
export class StudentModule {}