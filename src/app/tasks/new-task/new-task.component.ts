import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../user/user.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  entredTitle = '';
  entredSummary = '';
  entredDate = '';

  onCancelTask(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({ 
      title: this.entredTitle,
      summary: this.entredSummary,
      dueDate: this.entredDate 
    });
  }
}
