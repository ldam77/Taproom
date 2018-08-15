import { Component, Output, EventEmitter } from '@angular/core';
import { BeerKeg } from '../models/beerKeg.model';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Output() sendBeer = new EventEmitter();

  submitForm(name: string, price: number, alcoholContent: number) {
    let newBeerKeg: BeerKeg = new BeerKeg(name, price, alcoholContent);
    this.sendBeer.emit(newBeerKeg);
  }

}
