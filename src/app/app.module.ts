// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
// 3rd party libraries
import './core/rxjs-extensions';
// import 'hammerjs';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// Application specific imports
import { DataService } from './models/data.service';
import { AppRoutingModule } from './app.routes';

import { CoreModule } from './core/core.module';
import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';

import { reducer } from './models/reducers';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		StoreModule.provideStore(reducer),
		/**
		* @ngrx/router-store keeps router state up-to-date in the store and uses
		* the store as the single source of truth for the router's state.
		*/
		RouterStoreModule.connectRouter(),
		/**
		* Store devtools instrument the store retaining past versions of state
		* and recalculating new states. This enables powerful time-travel
		* debugging.
		*
		* To use the debugger, install the Redux Devtools extension for either
		* Chrome or Firefox
		*
		* See: https://github.com/zalmoxisus/redux-devtools-extension
		*/
		StoreDevtoolsModule.instrumentOnlyWithExtension(),
		// EffectsModule.run(BookEffects),
		// EffectsModule.run(ListEffects),

		AppRoutingModule,
		CoreModule,
		ListModule,
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor(
		private requestOptions: RequestOptions,
		private iconRegistry: MdIconRegistry,
		private sanitizer: DomSanitizer,
	) {
		requestOptions.headers.set('Content-Type', 'application/json');
	}
}
