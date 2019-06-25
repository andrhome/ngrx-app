import { Component, OnInit } from '@angular/core';
import { Car, Cars } from '../car.model';
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
  id = 4;

  constructor(private store: Store<AppState>,
              private carsServ: CarsService) { }

  ngOnInit() {
  }

  onAdd(): void {
    if (this.carModel === '' || this.carName === '') return;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );
    this.store.dispatch(new AddCar(car));
    this.carModel = '';
    this.carName = '';
  }

  onLoad(): void {
    this.carsServ.loadCars().subscribe(res => {
      const cars: Car[] = res.cars;
      this.store.dispatch(new LoadCars(cars))
    });
  }

}
