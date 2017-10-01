import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {StudentListComponent} from './student-list/student-list.component' 
import {StudentFormComponent} from './student-form/student-form.component' 
import { AppComponent } from './app.component';
import {StudentService} from './services/student-services'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
