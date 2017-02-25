import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PreloadSelectedModulesList } from './core/preload-strategy';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit';

const routes: Routes = [
	{
		path: '',
		component: ListComponent,
		// loadChildren: 'app/list/list.module#ListModule',
		// canActivate: [AuthGuard],
		// canLoad: [AuthGuard],
	},
	{
		path: 'edit', pathMatch: 'full',
		component: EditComponent
	},
	{
		path: '**', pathMatch: 'full',
		component: PageNotFoundComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes,
		{ preloadingStrategy: PreloadSelectedModulesList }
	)],
	exports: [RouterModule],
	providers: [
		AuthGuard,
		CanDeactivateGuard,
		PreloadSelectedModulesList,
		UserProfileService
	]
})
export class AppRoutingModule { }
