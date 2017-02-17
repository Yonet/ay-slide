import { Component,
	OnDestroy,
	OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ToastService } from './toast.service';

@Component({
	selector: 'a360-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnDestroy, OnInit {
	public message: string;
	public title: string;
	public url: string;
	public urlText: string;

	private defaults = {
		title: 'Error ',
		message: 'Unknown error happened!',
	};
	private toastElement: any;
	private toastSubscription: Subscription;

	constructor(private toastService: ToastService) {
		this.toastSubscription = this.toastService.toastState.subscribe((toastMessage) => {
			// TODO: add analytics here
			// console.log(`activiting toast: ${toastMessage.message}`)
			this.activate(toastMessage);
		});
	}

	activate(options) {
		this.title = options.title || this.defaults.title;
		this.message = options.message || this.defaults.message;
		this.url = options.url;
		this.urlText = options.urlText;
		this.show();
	}

	ngOnInit() {
		this.toastElement = document.getElementById('toast');
	}

	ngOnDestroy() {
		this.toastSubscription.unsubscribe();
	}

	private hide() {
		this.toastElement.style.opacity = 0;
		window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
	}

	private show() {
		this.toastElement.style.opacity = 1;
		this.toastElement.style.zIndex = 9999;

		window.setTimeout(() => this.hide(), 10000);
	};

}
