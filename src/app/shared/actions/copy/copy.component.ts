import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ay-copy',
	templateUrl: './copy.component.html',
	styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
	@Output() copy = new EventEmitter();

}
