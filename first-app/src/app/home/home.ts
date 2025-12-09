import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousinglocationInfo } from '../housinglocation';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  housingService: Housing = inject(Housing);
  housingLocationList: HousinglocationInfo[] = [];

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();

  }
}
