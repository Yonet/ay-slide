import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DeleteComponent } from './actions/delete/delete.component';
import { CopyComponent } from './actions/copy/copy.component';
import { ShareComponent } from './actions/share/share.component';
import { DownloadComponent } from './actions/download/download.component';

/**
 * SharedModule exists to make commonly used components,
 * directives and pipes (NOT services) available for use in the templates of components in many other modules.
 *
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 * You don't want each module to have its own separate instance of singleton services.
 * Yet there is a real danger of that happening if the SharedModule provides a service
 * A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesireable results.
 * For more info: https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-why-bad
 *
 * Do put common components, directives and pipes that will be used throughout the application by other feature modules in the SharedModule,
 * where those assets are expected to share a new instance of themselves (not singletons).
 *
 * Do import all modules required by the assets in the SharedModule (e.g. CommonModule and FormsModule).
 */

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		CopyComponent,
		DeleteComponent,
		DownloadComponent,
		ShareComponent,
	],
	declarations: [
		// PrevNextComponent,
		// TitleCasePipe,
		// DeleteComponent,
		// MoreComponent,
		// CopyComponent,
		// ExportComponent,
		// PresentComponent,
		// ColorPickerComponent,
		// EditComponent,
		// // RxContextDirective,
		// ByDatePipe,
		// IterableMapPipe,
		// UncamelizePipe,
		// DragDirective,
		CopyComponent,
		DeleteComponent,
		DownloadComponent,
		ShareComponent,
	]
})
export class SharedModule { }
