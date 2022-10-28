import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../interfaces/city';
import { Coordinate } from '../interfaces/coordinate';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getCoordinates(city: City): Observable<Coordinate> {
    return of(city.coordinate);
  }
}
