import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { City } from '../interfaces/city';
import { Coordinate } from '../interfaces/coordinate';
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
        map((coordinate: Coordinate) =>
          Math.round((coordinate.longitude + coordinate.latitude) / 2)
        )
      );
  }
}
