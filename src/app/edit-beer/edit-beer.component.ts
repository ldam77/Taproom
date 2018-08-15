import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BeerKeg } from '../models/beerKeg.model';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {
  @Input() childSelectedBeerKeg: BeerKeg;
  @Output() clickedDone = new EventEmitter();

  finishEditing() {
    this.clickedDone.emit();
  }
}
