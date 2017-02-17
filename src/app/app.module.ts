// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 3rd party libraries
import './core/rxjs-extensions';
// import 'hammerjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Application specific imports
import { DataService } from './models/data.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		ListModule,
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
