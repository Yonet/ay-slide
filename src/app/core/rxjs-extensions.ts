import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/race';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const debuggerOn = environment.production ? false : true;

Observable.prototype.debug = function(message: string) {
	return this.do(
		nextValue => {
			if (debuggerOn) {
				console.log(message, nextValue);
			}
		},
		error => {
			if (debuggerOn) {
				console.error('ERROR >>> ', message, error);
			}
		},
		() => {
			if (debuggerOn) {
				console.log('Completed.');
			}
		}
	);
};

declare module 'rxjs/Observable' {
	interface Observable<T> {
		debug: (...any) => Observable<T>;
	}
}
