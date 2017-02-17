import { Routes } from '@angular/router';

// import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
	{ path: '', loadChildren: 'app/presentations/presentations.module#PresentationsModule' },
	{ path: 'edit', loadChildren: 'app/edit/edit.module#EditModule' },
	{ path: 'view', loadChildren: 'app/view/view.module#ViewModule' },
	// { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
