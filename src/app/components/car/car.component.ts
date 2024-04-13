import { Component, Input, output } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData?:ICar;
  @Output() carDeletedEvent = new EventEmitter<string>();
  carImageWidth:number = 300;
  constructor(private _carAPIService:CarApiService) {}

  deleteCar(carId:string | undefined) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
    this.carDeletedEvent.emit("Car got deleted");
  }
}
