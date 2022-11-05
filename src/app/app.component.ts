import { Component } from '@angular/core';
import { allCars } from './allCarsInfo/allCars';
import { IAllCars } from './allCarsInfo/allCarsModule';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeworkMirea';

  allCars: IAllCars[] = allCars;

  isSignin: boolean = false;
}