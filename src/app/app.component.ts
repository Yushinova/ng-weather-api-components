import { Component } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { getWeather, WeatherResult} from '../weather-api/client';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,
    ErrorComponent,
    DetailsComponent,
  FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  weather: WeatherResult=new WeatherResult()
  rootcity: string=""
  //полученнные данные о погоде
  error: string=""
  enabled: boolean=false
  
async GetWeather(city: string){
    this.error=""
    let weather = await getWeather(city)
    if(typeof weather==="string"){
      this.error=weather
      this.weather=new WeatherResult()
      this.enabled=false
      return
    }
    this.weather=weather
    this.enabled=true
}
 
}
