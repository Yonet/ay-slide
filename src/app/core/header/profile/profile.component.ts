import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ay-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	@Input() user: any;
	constructor() { }

	ngOnInit() {
	}

}
