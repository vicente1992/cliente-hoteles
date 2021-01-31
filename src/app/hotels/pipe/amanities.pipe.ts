import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amanities'
})
export class AmanitiesPipe implements PipeTransform {

  transform(icon: string): string {
    if (icon) {
      return `assets/icons/amenities/${icon}.svg`;
    }

  }

}
