import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { City } from '../interfaces/city';
import { GeolocationService } from './geolocation.service';

import { PickyWeatherStationService } from './picky-weather-station.service';

describe('PickyWeatherStationService', () => {
  let service: PickyWeatherStationService;
  let serviceGeo: GeolocationService;

  let temperature: number;
  let city: City = { name: 'Lyon' };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickyWeatherStationService);
    serviceGeo = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get random temperature', fakeAsync(() => {
    spyOn(serviceGeo, 'getCoordinates').and.returnValue(
      of({
        latitude: 45.764043,
        longitude: 4.835659,
      })
    );

    service
      .getTemperature(city)
      .subscribe((_temperature) => (temperature = _temperature));

    /* Flush any async tasks. */
    flush();

    expect(temperature).toBe(25);

    /* Check that getCoordinates has been called once with the right parameters. */
    expect(serviceGeo.getCoordinates).toHaveBeenCalledTimes(1);
    expect(serviceGeo.getCoordinates).toHaveBeenCalledWith(city);
  }));
});
