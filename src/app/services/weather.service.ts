import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
  url = 'https://api.openweathermap.org/data/2.5/'; 
  key = '';
  city = 'Sleman';

  constructor(private http: HttpClient) { }
    getDataNow() {
      return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
    }

    getDataForecast() {
      return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
    }
}
