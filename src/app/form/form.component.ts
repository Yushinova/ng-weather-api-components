import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() city:string="" 
  @Output() onFormSubmitComponent= new EventEmitter<string>()
  async onFormSubmit(event: any) {
    this.onFormSubmitComponent.emit(this.city);
   }
}
