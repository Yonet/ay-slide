import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSwitcherComponent } from './app-switcher/app-switcher.component';
import { HeaderComponent } from './header.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AppSwitcherComponent,
		HeaderComponent,
		ProfileComponent,
	],
	exports: [HeaderComponent] // We are only exporting header component because other components will be used inside the header component.
})
export class HeaderModule { }
