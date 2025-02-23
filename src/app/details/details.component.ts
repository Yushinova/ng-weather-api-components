import { Component, Input } from '@angular/core';
import { WeatherResult } from '../../weather-api/client';
import { ElementComponent } from '../element/element.component';
@Component({
  selector: 'app-details',
  imports: [ElementComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
@Input() parametr: WeatherResult=new WeatherResult()
@Input() error: string=''
@Input() isResult=false
}
