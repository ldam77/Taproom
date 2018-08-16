import {Pipe, PipeTransform} from '@angular/core';
import {BeerKeg} from './models/beerKeg.model';



@Pipe({
  name: "capacity",
  pure: false
})

export class CapacityPipe implements PipeTransform {
  transform(input: BeerKeg[], capacityLevel){
    let output: BeerKeg[] = [];
    if(capacityLevel=="lowLevel"){
      for(let i=0; i<input.length; i++){
        if(input[i].capacity<10){
          output.push(input[i]);
        }
      }
      return output;
    } else{
      return input;
    }
  }
}
