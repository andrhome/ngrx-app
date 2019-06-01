import { Car } from '../car.model';
import { CarsAction, CAR_ACTION } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.10.18', 'A6', false, 2),
    new Car('BMW', '08.01.19', 'M5 Turbo', false, 3)
  ]
}

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      }
    case CAR_ACTION.UPDATE_CAR:
      const index = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[index].isSolid = true;

      return {
        ...state,
        cars: [...state.cars]
      }
    default:
      return state;
  }
}
