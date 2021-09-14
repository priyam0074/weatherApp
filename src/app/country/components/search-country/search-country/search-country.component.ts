import { EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import {Country, CountryService} from '../../../services/country.service'

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})

export class SearchCountryComponent implements OnInit {
  @Input() countries: any;
  @Output() showCountries = new EventEmitter<any>();
  myControl = new FormControl();
  countriesReplica:any =[];
  
 filteredOptions: Observable<Country[]> | undefined;
  constructor(public countryService: CountryService) {

   }

  ngOnInit(): void {
    this.countriesReplica = this.countries;
    // this.filteredOptions = this.countryService.filterCountries('');
    this.myControl.valueChanges.subscribe(data => {
      if(!data) {
        this.showCountries.emit(''); 
        return;
      }
      this.filteredOptions = this.countryService.filterCountries(data);
      
    })
    
      
  }
  onCountrySelect(event:any) {
    console.log(event);
    this.showCountries.emit(event.option.viewValue);
    this.myControl.setValue(event.option.viewValue)
  }

  ngOnChanges(changes:SimpleChanges) {
    // if(changes.countries) {
    //   this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this.countryService.filterCountries(value).subscribe(data=> {
    //       console.log(data);
    //     }))
    //   )
    // }
  }
  
  
}
