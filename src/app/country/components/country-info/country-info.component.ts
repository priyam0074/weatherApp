import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})

export class CountryInfoComponent implements OnInit {


  countries: any;
  countryLabel = ['capital', 'population', 'numericCode', 'region']
  countryExtraLabel =['currencies','languages']
  countryTableLabel =['name','nativeName','capital', 'population', 'numericCode', 'region', 'flag']
  displayTemplate =true;
  dataSource = new MatTableDataSource();
  sortedData:any = [];
  constructor(public countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
     console.log("came here")
     this.countryService.getCountriesData().subscribe(data=> {
      this.countries = data;
      this.countryService.setCountriesData(this.countries);
      this.dataSource = new MatTableDataSource(this.countries);
      this.sortedData = this.countries.slice();
     })
  }
  showCountries(event:any) {
    this.countryService.filterCountries(event).subscribe(data=> {
      this.countries = data;
      // this.countryService.setCountriesData(this.countries);
    });
    
  }
   onCardClick = (event:any) => {
      this.router.navigate(['weather/'+event])
  }

  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onShowMode(event:boolean) {
    this.displayTemplate =event;
  }

  sortData(sort: any) {
    const data = this.countries.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'nativeName': return compare(a.nativeName, b.nativeName, isAsc);
        case 'capital': return compare(a.capital, b.capital, isAsc);
        case 'population': return compare(a.population, b.population, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.sortedData);
  }
}
