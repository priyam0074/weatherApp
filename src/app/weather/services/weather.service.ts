import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {

    constructor(private http: HttpClient,) {

    }

    getWeatherDataByName(name:string) {
        let url = '?q='+ name+ '&& appid=ff1bc4683fc7325e9c57e586c20cc03e'
        return this.http.get<any>(url);
    }
  }