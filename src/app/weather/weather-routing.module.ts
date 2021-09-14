import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

const routes: Routes = [];
export const WeatherRoutes = [
	{
		path: '',
		component: WeatherWidgetComponent,
		children:[
            {path: '/:capitalName', component:WeatherWidgetComponent},
			{path: '', component: WeatherWidgetComponent},
			{path: '**', component: WeatherWidgetComponent}
		]
	},
];



@NgModule({
  imports: [RouterModule.forChild(WeatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }