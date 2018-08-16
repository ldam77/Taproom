import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BeerKeg } from '../models/beerKeg.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  @Input() childBeerList: BeerKeg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickedBuy = new EventEmitter();

  editButtonClicked(currentBeer: BeerKeg) {
    this.clickSender.emit(currentBeer);
  }

  buyButtonClicked(currentBeer: BeerKeg) {
    this.clickedBuy.emit(currentBeer);
  }
  lowKegLevel(currentBeer:BeerKeg){
    if(currentBeer.capacity<10){
      return "bg-danger";
    }
  }


}
