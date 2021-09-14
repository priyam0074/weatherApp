import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import {Country, CountryService} from '../services/country.service'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private filterService: CountryService) {}

  transform(value: any, filterTerm: string): Observable<Country[]> {
    return this.filterService.filterCountries(filterTerm);
  }

}
