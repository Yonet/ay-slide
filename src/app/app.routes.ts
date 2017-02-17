import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PreloadSelectedModulesList } from './core/preload-strategy';

const routes: Routes = [
	{ path: '', loadChildren: 'app/list/list.module#ListModule' },
	// { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
	// {
	// 	path: 'admin',
	// 	loadChildren: 'app/admin/admin.module#AdminModule',
	// 	canActivate: [AuthGuard],
	// 	canLoad: [AuthGuard],
	// },
	// {
	// 	path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
	// 	data: { preload: true }
	// },
	// {
	// 	path: 'speakers', loadChildren: 'app/speakers/speakers.module#SpeakersModule',
	// 	data: { preload: true }
	// },
	// { path: 'sessions', loadChildren: 'app/sessions/sessions.module#SessionsModule' },
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
		// UserProfileService
	]
})
export class AppRoutingModule { }
