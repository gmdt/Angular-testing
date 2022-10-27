import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { City } from '../interfaces/city';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root',
})
export class PickyWeatherStationService {
  constructor(private _geolocation: GeolocationService) {}

  getTemperature(city: City) {
    return this._geolocation
      .getCoordinates(city)
      .pipe(
        map((coordinates: any) =>
          Math.round((coordinates.longitude + coordinates.latitude) / 2)
        )
      );
  }
}
