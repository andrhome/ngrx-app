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

  onDelete(): void {
    this.carsServ.deleteCar(this.car).subscribe(() => {
      console.log('Removed the car: ', this.car);
      this.store.dispatch(new DeleteCar(this.car));
    });
  }

  onBuy(): void {
    this.car.isSolid = true;
    this.carsServ.updateCar(this.car).subscribe(() => {
      console.log('Bought the car: ', this.car);
      this.store.dispatch(new UpdateCar(this.car))
    });
  }

}
