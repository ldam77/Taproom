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

  alcoholContent(currentBeer:BeerKeg){
    if(currentBeer.alcoholContent<=5){
      return "bg-success";
    } else {
      return "bg-danger";
    }
  }

  priceColorCode(currentBeer:BeerKeg) {
    if(currentBeer.price<=5){
      return "cheap-beer";
    } else if(currentBeer.price<=10) {
      return "good-beer";
    } else {
      return "expensive-beer";
    }
  }

  desiredFilter: string = "allBeer";

  onChange(optionFromMenu) {
    this.desiredFilter = optionFromMenu;
  }
}
