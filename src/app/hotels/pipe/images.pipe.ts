import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: string): string {
    if (image) {
      return `assets/hotels/${image}`;
    }
    return 'assets/hotels/noimage.png';
  }

}
