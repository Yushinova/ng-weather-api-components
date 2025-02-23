import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {
@Input() parametr: string=""
@Input() image: string=""
@Input() content: string=""
}
