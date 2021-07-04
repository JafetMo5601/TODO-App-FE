import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './services/task.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    CreateTaskComponent,
    TasksListComponent,
    HomeComponent,
    AppComponent,
    SearchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    TaskService
  ]
})
export class AppModule { }