import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { CountryInterceptor } from '../Shared/country.inceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountryRoutingModule } from './country-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {MatCardModule} from '@angular/material/card';
import { CapitualizeFilterPipe } from './filter/capitualize-filter.pipe';
import { SearchCountryComponent } from './components/search-country/search-country/search-country.component';
import { FilterPipe } from './filter/filter.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faTable,
  faGripHorizontal
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    CountryInfoComponent,
    CapitualizeFilterPipe,
    SearchCountryComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    FontAwesomeModule,
    MatSortModule
  ],
  providers:[
  ]
})
export class CountryModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faTable,
      faGripHorizontal
    );
  }
}

