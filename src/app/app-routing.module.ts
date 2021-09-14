import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
    data:{preload:true}

},
{
  path: 'weather/:capitalName',
  loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
  data:{preload:true}

},
// { path: '', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
