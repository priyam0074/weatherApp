import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitualizeFilter',
  pure: true
})
export class CapitualizeFilterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    return (value.toString() && value.length > 0) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : value;
  }

}
