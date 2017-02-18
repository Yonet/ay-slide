import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ay-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	public list = [1, 2, 3, 4];

	constructor() { }

	ngOnInit() {
	}

}
