import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';

import { Task } from '../../interfaces/task';

@Component({
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  providers: [TaskService]
})
export class TasksListComponent implements OnInit {
  pageTitle: string = 'Product List';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  receivingFilter: string = '';

  constructor(private taskService: TaskService) {}


  ngOnInit() {
    this.getTasks();
  }

  generateTasksList(tasks: any) {
    for (let object = 0; object < tasks.length; object++) {
      this.tasks.push(tasks[object]);
    }
  }


  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(
      (tasks: any) => (this.generateTasksList(tasks)),
      (error) => console.log(error)
      );
  }

  filterHandler(filter: any) {
    this.receivingFilter = filter;
    console.log(this.receivingFilter);
  }
}
