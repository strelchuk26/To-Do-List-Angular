import { Component, Input } from '@angular/core';
import { ITask } from './task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private taskService: TaskService) {}

  @Input()
  task: ITask = {
    id: 0,
    text: "",
    isDone: false,
    isImportant: false,
    deadline: new Date()
  }

  isDateValid(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  makeDone(event: Event, task: ITask): void {
    const target = event.target as HTMLImageElement;

    if (task.isDone) {
      task.isDone = false;
      target.parentElement?.classList.remove("done");
    }
    else {
      task.isDone = true;
      target.parentElement?.classList.add("done");
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
