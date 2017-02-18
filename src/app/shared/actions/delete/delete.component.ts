import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ay-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
	@Output() delete = new EventEmitter();

}
