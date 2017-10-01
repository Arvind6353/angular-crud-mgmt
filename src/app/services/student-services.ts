import {Injectable} from "@angular/core"
import {Http , Request, Headers, Response} from "@angular/http" 
import {Student} from '../interface/Student'

import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch' 

@Injectable()
export class StudentService {

    apiUrl : string = "http://localhost:3000/students";

    constructor(private http: Http) {
    
    }

    getStudentsList() : Observable<Student[]> {
       return this.http.get(this.apiUrl)
        .map( (response: Response) => response.json())
        .catch(this.handleError);
    }

    createStudent(name) : Observable<Student> {
        return this.http.post(this.apiUrl,{studentname: name})
        .map( (response: Response) => response.json())
        .catch(this.handleError);
    }

    deleteStudent(id) : Observable<Student> {
       return this.http.delete(this.apiUrl+`/${id}`)
        .map((response:Response) => response.json())
        .catch(this.handleError)
    }

    handleError (error:any) {
        return Observable.throw(error.json().error || 'Server error')
    }
}