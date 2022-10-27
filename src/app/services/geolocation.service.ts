import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../interfaces/city';
import { Coordinate } from '../interfaces/coordinate';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  //to implement
  //create a new instance of interface City
  getCoordinates(city: City): Observable<Coordinate> {
    throw new Error('Oops, some error occurred;');
  }
}
