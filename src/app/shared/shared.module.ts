import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DeleteComponent } from './actions/delete/delete.component';
import { CopyComponent } from './actions/copy/copy.component';
import { ShareComponent } from './actions/share/share.component';
import { DownloadComponent } from './actions/download/download.component';

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
