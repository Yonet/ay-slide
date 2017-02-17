import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PreloadSelectedModulesList } from './core/preload-strategy';

const routes: Routes = [
	{
		path: '', loadChildren: 'app/list/list.module#ListModule',
		// canActivate: [AuthGuard],
		// canLoad: [AuthGuard],
	},
	{ path: '**', pathMatch: 'full', component: PageNotFoundComponent },
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
