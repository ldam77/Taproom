import { Component } from '@angular/core';
import { BeerKeg } from './models/beerKeg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterBeerKegList: BeerKeg[] = [
    new BeerKeg('Coors Light', 5, 4),
    new BeerKeg('Blue Moon', 7, 6),
    new BeerKeg('Hipster IPA', 15, 11)
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

  buyGrowler(clickedBeer: BeerKeg) {
    clickedBeer.capacity-=2;
  }

}
