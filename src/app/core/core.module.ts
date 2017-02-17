import { NgModule,
	// Optional,
	// SkipSelf 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './header/header.module';
import { ExceptionService } from './exception.service';

import { FooterComponent } from './footer/footer.component';
import { TrackingDirective } from './tracking.directive';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HeaderModule,
	],
	declarations: [
		FooterComponent,
		TrackingDirective,
	],
	providers: [ExceptionService]
})
export class CoreModule {
	// throwIfAlreadyLoaded(parentModule, 'CoreModule');
}
