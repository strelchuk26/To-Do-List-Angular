import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITask } from '../task/task';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent {
  constructor(private fb: FormBuilder) { }

  creationForm = this.fb.group({
    text: ['', Validators.minLength(4)],
    deadline: [null],
    isImportant: [false],
    isDone: [false]
  });

  @Output() 
  createEvent = new EventEmitter<ITask>();
  
  onSubmit(): void {
    if (!this.creationForm.valid) {
      alert("Invalid data!");
      return;
    }

    const task = this.creationForm.value as ITask;

    if (task.deadline == null) {
      task.deadline == null;
    }
    else if (typeof(task.deadline) == typeof("string")) {
      task.deadline = new Date(task.deadline);
    }

    this.createEvent.emit(task);
  }
}
