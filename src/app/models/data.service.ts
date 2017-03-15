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
const peopleApi = environment['people'];

@Injectable()
export class DataService {

	constructor(
		private http: Http,
		private store: Store<AppStore>,
	) { }

	getPeople() {
		// console.log("PPPPPPPPP");
		return <Observable<any>>this.http
			.get(peopleApi, this.getRequestOptions())
			.map((res: Response) => this.extractData(res));
		// 	.do(r => console.log('r', r))

	}

	getPresentations() {
		// console.log('getting presentations')
		return <Observable<any>>this.http
			.get(presentationApi, this.getRequestOptions())
			.map((res: Response) => this.extractData(res))
		// 	.do(r => console.log('r', r))
		// .map(r => );

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
			headers: headers,
		});

		return options;
	};

	private extractData<T>(res: Response) {
		console.log('Response is being extracted ', res);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		};
		const body = res.json();
		return <T>(body || {});
	}
}
