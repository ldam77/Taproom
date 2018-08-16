import {Pipe, PipeTransform} from '@angular/core';
import {BeerKeg} from './models/beerKeg.model';



@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: BeerKeg[], desiredFilter){
    let output: BeerKeg[] = [];
    if(desiredFilter=="lowLevel"){
      for(let i=0; i<input.length; i++){
        if(input[i].capacity<10){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredFilter=="lowPrice"){
        for(let i=0; i<input.length; i++){
          if(input[i].price<=5){
            output.push(input[i]);
          }
        }
        return output;
      } else{
      return input;
    }
  }
}
