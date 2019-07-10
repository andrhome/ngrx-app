import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Car } from '../car.model';

@Injectable()
export class CarsService {
  private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {

  }

  loadCars(): Observable<any> {
    return this.http.get(this.BASE_URL + 'cars');
  }

  addCar(car: Car): Observable<any> {
    return this.http.post(this.BASE_URL + 'cars', car);
  }
}
