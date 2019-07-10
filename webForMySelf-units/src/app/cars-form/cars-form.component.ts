import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { AddCar, LoadCars } from '../redux/cars.action';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {
  carName: string;
  carModel: string;

  constructor(private store: Store<AppState>,
              private carsServ: CarsService) { }

  ngOnInit() {
  }

  onAdd(): void {
    if (this.carModel === '' || this.carName === '') return;

    const date = moment().format('DD.MM.YY');
    const car = new Car(this.carName, date, this.carModel);

    this.carsServ.addCar(car).subscribe((res: Car) => {
      console.log('Added the car: ', res);
      this.store.dispatch(new AddCar(res));
    });

    this.carModel = '';
    this.carName = '';
  }

  onLoad(): void {
    this.carsServ.loadCars().subscribe((res: Car[]) => {
      console.log('Loaded the cars: ', res);
      this.store.dispatch(new LoadCars(res))
    });
  }

}
