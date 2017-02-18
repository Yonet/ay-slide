import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ay-share',
	templateUrl: './share.component.html',
	styleUrls: ['./share.component.scss']
})
export class ShareComponent {
	@Output() share = new EventEmitter();
}
