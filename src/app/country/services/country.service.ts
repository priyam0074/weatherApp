import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { delay, map, startWith } from 'rxjs/operators';

export interface Country {
    name: string;
    code: string;
  }
@Injectable({
    providedIn: 'root'
  })
  export class CountryService {
    countries:any;
    constructor(private http: HttpClient,) {

    }
    setCountriesData(countries:any) {
       this.countries = countries
    }
    getCountriesData() {
        let url = 'rest/v2/all';
        return this.http.get<any>(url);
    }

    filterCountries(filter?: string): Observable<Country[]> {
        return of(this.countries).pipe(
          delay(2000),
          map(c => {
            // if filter is empty return all countries
            if (!filter) {
              return c;
            }
    
            // search for specific countries
            const filteredCountries: Country[] = [];
    
            c.filter(function(country:any) {
              if (country.name.toLowerCase().includes(filter.toLowerCase())) {
                filteredCountries.push(country);
              }
            });
    
            return filteredCountries;
          })
        );
      }
  }