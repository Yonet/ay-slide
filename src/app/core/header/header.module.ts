import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSwitcherComponent } from './app-switcher/app-switcher.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AppSwitcherComponent,
		ProfileComponent,
	]
})
export class HeaderModule { }
