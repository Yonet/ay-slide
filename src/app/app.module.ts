// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

// 3rd party libraries
import './core/rxjs-extensions';
// import 'hammerjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Application specific imports
import { DataService } from './models/data.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		CoreModule,
		ListModule,
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor(requestOptions: RequestOptions) {
		requestOptions.headers.set('Content-Type', 'application/json');
	}
}
