import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable()
export class CarsService {
  private BASE_URL = '/assets/';

  constructor(private http: HttpClient) {

  }

  loadCars(): Observable<any> {
    return this.http.get(this.BASE_URL + 'db.json');
  }
}
