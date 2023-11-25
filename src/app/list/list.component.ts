import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../task/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  tasks: ITask[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  addTask(task: ITask): void {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }
}