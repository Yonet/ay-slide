import { Injectable } from '@angular/core';
import {
	Http,
	Headers,
	RequestOptions,
	Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { AppStore } from './app.model';

const presentationApi = environment['url'] + environment['presentation_api'];

@Injectable()
export class DataService {

	constructor(
		private http: Http,
		private store: Store<AppStore>,
	) { }

	getPresentations() {

	}

	getPresentationById(id) {

	}

	createPresentation() {
		return <Observable<any>>this.http
			.post(presentationApi, null, this.getRequestOptions())
			.map((res: Response) => console.log('created oresen', res))

	}

	deletePresentation(id) { }

	updatePresentation(p) { }

	private getRequestOptions(args?) {
		const headers = new Headers();
		if (args) {
			for (const key in args) {
				headers.append(key, args[key]);
			}
		}
		const options = new RequestOptions({
			withCredentials: true,
			headers: headers,
		});
		return options;
	};
}
