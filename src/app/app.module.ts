import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountryInterceptor } from './Shared/country.inceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule 

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CountryInterceptor,
      multi: true,
    },
      { provide: "BASE_API_URL", useValue: environment.apiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
