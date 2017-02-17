import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

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
	]
})
export class SharedModule { }
