import { Injectable } from "@angular/core";
import { NewTaskData } from "../user/user.model";


@Injectable({providedIn: 'root'})
export  class TasksService {
  private tasks = [
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


    getUserTaks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
          });
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}