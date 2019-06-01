import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onDelete(): void {
    this.store.dispatch(new DeleteCar(this.car))
  }

  onBuy(): void {
    this.store.dispatch(new UpdateCar(this.car))
  }

}
