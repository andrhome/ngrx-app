import { Car } from '../car.model';

export interface AppState {
  carPage: {
    cars: Array<Car>
  }
}
