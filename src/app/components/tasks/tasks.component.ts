import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private service: TaskService) {

  }

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.service.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id != task.id));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.service.updateTaskReminder(task).subscribe();
  }
}
