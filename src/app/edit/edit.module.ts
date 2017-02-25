import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [EditComponent],
	declarations: [EditComponent]
})
export class EditModule { }
