import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.action';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private store: Store<AppState>,
              private carsServ: CarsService) { }

  ngOnInit() {
  }

  onDelete(car: Car): void {
    this.carsServ.deleteCar(car).subscribe(() => {
      console.log('Removed the car: ', car);
      this.store.dispatch(new DeleteCar(car));
    });
  }

  onBuy(): void {
    this.store.dispatch(new UpdateCar(this.car))
  }

}
