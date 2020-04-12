import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from '../models/animal.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Animal[], term: string): Animal[] {
    if ( term !== undefined) {
      value = value.filter(function(animal) {
        return animal.name.toLowerCase().includes(term.toLowerCase());
      });
    }
    return value;
  }

}
