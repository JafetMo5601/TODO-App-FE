import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';
import { MatChip } from '@angular/material/chips';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {

  private tasksAddUrl = 'http://127.0.0.1:5000/tasks/add/';

  descriptionText: string = 'Put in here what do you have to do?';
  statusText: string = 'How it is going?';
  placeholder: string = 'Describe your task';

  newTaskForm: FormGroup;

  priorities = [
    {'id': 1, 'name': 'Low'},
    {'id': 2, 'name': 'Medium'},
    {'id': 3, 'name': 'High'}
  ];

  statusList = [
    {value: 1, label: 'Completed'},
    {value: 2, label: 'In progress'},
    {value: 3, label: 'Planning'},
    {value: 4, label: 'Not started'},
    {value: 5, label: 'Blocked'}
  ];

  tags = [
    {'id': 1, 'name': 'New idea'},
    {'id': 2, 'name': 'Front-End enhancement'},
    {'id': 3, 'name': 'Back-End feature'},
    {'id': 4, 'name': 'Database problem'},
    {'id': 5, 'name': 'Technology deprecated'},
    {'id': 6, 'name': 'Database feature'},
    {'id': 7, 'name': 'Front-End issue'},
    {'id': 8, 'name': 'Back-End bug'}
  ];

  taskTypes = [
    {'id': 1, 'name': 'New project'},
    {'id': 2, 'name': 'College project'},
    {'id': 3, 'name': 'Ongoing project'}
  ];

  taskDescription = new FormControl('', Validators.required);
  statusId = new FormControl(this.statusList);
  taskTypeId = new FormControl('');
  priorityId = new FormControl('');
  tagId = new FormControl('');

  constructor(
    private taskService: TaskService,
    private http: HttpClient,
    public fb: FormBuilder) {
      this.newTaskForm = this.fb.group({
        taskDescription: this.taskDescription,
        statusId: this.statusId,
        taskTypeId: this.taskTypeId,
        priorityId: this.priorityId,
        tagId: this.tagId
      });      
    }

  submitForm(): void {
    console.log(this.newTaskForm.value);
    this.taskService.addTask(this.newTaskForm.value)
    .subscribe(
      (response) => console.log(response),
      (error) => this.taskService.handleError(error)
      );
  }

  tagSelection(chip: MatChip) {
    chip.toggleSelected();
    this.newTaskForm.controls['tagId'].setValue(chip.value);
  }

  scroll(section: HTMLElement): void {
    section.scrollIntoView({behavior: 'smooth'})
  }
  
}
