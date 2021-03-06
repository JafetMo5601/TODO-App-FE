import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  constructor(private tasksService: TaskService) { }

  ngOnInit() {
  }
}
