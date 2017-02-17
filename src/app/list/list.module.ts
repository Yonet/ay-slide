import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule,
	routedComponents } from './list.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		ListRoutingModule,
	],
	declarations: [routedComponents],
})
export class ListModule { }
