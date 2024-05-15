import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Pet[] , searchText: string): Pet[] {
    if (searchText == undefined){
      return value
    }
    return value.filter(pet => pet.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}
