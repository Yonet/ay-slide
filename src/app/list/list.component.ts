import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/app.model';
import * as fromRoot from '../models/reducers';

@Component({
	selector: 'ay-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	public list = [1, 2, 3, 4];
	public list$: Observable<Item[]>;

	constructor(store: Store<fromRoot.State>) {
		this.list$ = store.select(fromRoot.getItemList);
	}

	createNew() {

	}

	copyItem(item) { }

	deleteItem(item) {
		// dispatch delete event
	}

	shareItem(item) { }

}
