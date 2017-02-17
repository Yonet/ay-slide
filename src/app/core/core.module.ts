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

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HeaderModule,
		ToastModule,
	],
	exports: [
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
