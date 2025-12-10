import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  housingService: Housing = inject(Housing);
  housingLocationList: HousinglocationInfo[] = [];
  filteredLocationList: HousinglocationInfo[] = [];


  constructor(){
    
    this.housingService.getAllHousingLocations().then((housingLocationList:HousinglocationInfo[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = this.housingLocationList;
      this.changeDetectorRef.markForCheck();

    });
    
  }

   filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
