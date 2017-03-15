import { NgModule,
	// Optional,
	// SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './header/header.module';
import { ToastModule } from './toast/toast.module';
import { ExceptionService } from './exception.service';

import { FooterComponent } from './footer/footer.component';
import { TrackingDirective } from './tracking.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * CoreModule exists to make commonly used singleton services and modules available for use in the many other modules.
 * Note: Commonly used components, directives and pipes is saved to SharedModule.
 *
 * Do collect single-use classes and hiding their gory details inside CoreModule.
 * A simplified root AppModule imports CoreModule in its capacity as orchestrator of the application as a whole.
 * Do put a singleton service whose instance wil be shared throughout the application in the CoreModule
 * (e.g. ExceptionService and LoggerService).
 *
 * Do gather application-wide, single use components in the CoreModule.
 * Import it once (in the AppModule) when the app starts and never import it anywhere else.
 * (e.g. NavComponent and SpinnerComponent).
 * AVOID importing the CoreModule anywhere except in the AppModule.
 *
 * Do export all symbols that from the CoreModule that the AppModule will import and make available for other feature modules to use.
 *
 * For more info: https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11
 */

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HeaderModule,
		ToastModule,
	],
	exports: [
		HeaderModule,
		ToastModule,
		PageNotFoundComponent
	],
	declarations: [
		FooterComponent,
		TrackingDirective,
		PageNotFoundComponent,
	],
	providers: [ExceptionService]
})
export class CoreModule {
	// throwIfAlreadyLoaded(parentModule, 'CoreModule');
}
