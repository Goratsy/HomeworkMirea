import { Component, Input } from '@angular/core';
import { allCars } from '../allCarsInfo/allCars';
import { IAllCars } from '../allCarsInfo/allCarsModule';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})

export class CarListComponent {
  allCars: IAllCars[] = allCars;
}
