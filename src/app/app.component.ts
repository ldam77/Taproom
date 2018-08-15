import { Component } from '@angular/core';
import { BeerKeg } from './models/beerKeg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterBeerKegList: BeerKeg[] = [
    new BeerKeg('Budweiser', 5, 6),
    new BeerKeg('Corona', 6, 6),
    new BeerKeg('Coors Light', 5, 5)
  ];

  selectedBeerKeg: BeerKeg = null;

  addNewBeer(newBeerKeg: BeerKeg) {
    this.masterBeerKegList.push(newBeerKeg);
  }

  editBeer(clickedBeer) {
    this.selectedBeerKeg = clickedBeer;
  }

  finishEditing() {
    this.selectedBeerKeg = null;
  }

  buyBeer(clickedBeer: BeerKeg) {
    clickedBeer.capacity--;
  }

}
