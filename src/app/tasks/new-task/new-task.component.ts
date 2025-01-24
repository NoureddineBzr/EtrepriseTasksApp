import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../user/user.model';
import { TasksService } from '../tasks.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  
  entredTitle = '';
  entredSummary = '';
  entredDate = '';
  private tasksService = inject(TasksService);

  onCancelTask(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.entredTitle,
      summary: this.entredSummary,
      dueDate: this.entredDate,
    }, this.userId); 
    this.close.emit();
  }
}
