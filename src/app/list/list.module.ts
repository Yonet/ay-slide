import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list.component';


@NgModule({
	imports: [
		CommonModule,
		SharedModule,
	],
	declarations: [ListComponent],
	exports: [ListComponent]
})
export class ListModule { }
