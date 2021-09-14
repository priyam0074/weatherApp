import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryInfoComponent } from './components/country-info/country-info.component';

const routes: Routes = [];
export const CountryRoutes = [
	{
		path: '',
		component: CountryInfoComponent,
		children:[
			{path: '', component: CountryInfoComponent},
			{path: '**', component: CountryInfoComponent}
		]
	},
];



@NgModule({
  imports: [RouterModule.forChild(CountryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
