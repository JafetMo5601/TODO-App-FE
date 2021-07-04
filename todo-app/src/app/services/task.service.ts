import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { Task } from '../interfaces/task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class TaskService {

  tasksListUrl = 'http://127.0.0.1:5000/api/tasks/list/';
  tasksAddUrl = 'http://127.0.0.1:5000/api/tasks/add/';

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksListUrl);
  }

  addTask(newTask: Task) {
    return this.http.post(this.tasksAddUrl, newTask)
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
