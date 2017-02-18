import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ay-download',
	templateUrl: './download.component.html',
	styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
	@Output() download = new EventEmitter();
}
