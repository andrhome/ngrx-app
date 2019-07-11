import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Car } from '../car.model';

@Injectable()
export class CarsService {
  private CARS_URL = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {

  }

  loadCars(): Observable<any> {
    return this.http.get(this.CARS_URL);
  }

  addCar(car: Car): Observable<any> {
    return this.http.post(this.CARS_URL, car);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(`${this.CARS_URL}/${car.id}`, car);
  }

  deleteCar(car: Car): Observable<any> {
    return this.http.delete(`${this.CARS_URL}/${car.id}`)
  }
}
