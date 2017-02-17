import { Injectable,
	Optional,
	SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ToastMessage {
	title?: string;
	message: string;
	url?: string;
	urlText?: string;
}

@Injectable()
export class ToastService {
	private toastSubject = new Subject<ToastMessage>();

	toastState = this.toastSubject.asObservable();

	constructor( @Optional() @SkipSelf() prior: ToastService) {
		if (prior) {
			console.log('toast service already exists');
			return prior;
		}
	};

	activate(options: ToastMessage) {
		this.toastSubject.next(<ToastMessage>options);
	};
}
