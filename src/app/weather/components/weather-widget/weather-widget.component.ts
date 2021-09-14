import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  WeatherData:any;
  cityName:any;
  // data$: Observable<any>;
  constructor(public route:ActivatedRoute) { }
  
  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    // this.data$ = this.route.params.pipe(
    //   map(params => params["locationName"]),
    //   filter(name => !!name),
    //   concatMap(name => this.getWeatherData(name))
    // );
    this.route.paramMap.subscribe( paramMap => {
      this.cityName = paramMap.get('capitalName');
      this.getWeatherData(this.cityName, 'imperial' );
  })
    
  }

  getWeatherData(city:any,unit:any){
    // with units
    // const path =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=ff1bc4683fc7325e9c57e586c20cc03e`
    const path =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff1bc4683fc7325e9c57e586c20cc03e`
    fetch(path)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.name = data.name;
    this.WeatherData.cf = data.sys.country;
    this.WeatherData.icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      this.WeatherData.weather[0]["icon"]
      }.svg`;
      this.WeatherData.desc = this.WeatherData.weather[0]["description"]
  }
}
