import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular basics', 
      dueDate:'2022-12-12',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master React',
      summary: 'Learn React basics',
      dueDate:'2015-12-12',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Vue',
      summary: 'Learn Vue basics',
      dueDate:'2015-12-12',
    },
  ]; 

  get selecteduserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
   

  onStartAddTask(){
    this.isAddingTask = true;
  }
  
  onCancelTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    })
    this.isAddingTask = false;
  }

}
 