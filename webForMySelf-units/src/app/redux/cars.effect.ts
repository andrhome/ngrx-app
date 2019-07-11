import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddCar, CAR_ACTION } from './cars.action';
import { mergeMap, switchMap } from 'rxjs/internal/operators';
import { Car } from '../car.model';
import { CarsService } from '../services/cars.service';

@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions,
              private carsServ: CarsService) {}

  @Effect() loadCars = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    switchMap((action: AddCar) => this.carsServ.loadCars()),
    mergeMap((cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ]
    })
  );

}
