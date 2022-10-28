import { TestBed } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  let service: GeolocationService;
  const city = {
    name: 'test',
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get geolocation', () => {
    service.getCoordinates(city).subscribe((coord) => {
      expect(coord).toEqual(city.coordinate);
    });
  });
});
