import { NgModule } from '@angular/core';
import { Routes,
	RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
// import { ItemComponent } from './item/item.component';
// import { CanDeactivateGuard }     from '../core';

const routes: Routes = [
	{
		path: '',
		component: ListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ListRoutingModule { }

export const routedComponents = [ListComponent];
