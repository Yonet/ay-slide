import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/app.model';
import * as fromRoot from '../models/reducers';
import * as list from '../models/actions/list';
import { DataService } from '../models/data.service';
@Component({
	selector: 'ay-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

	public list$: Observable<any>;
	public people;

	constructor(
		private store: Store<fromRoot.State>,
		private service: DataService) {
		this.service.getPresentations()
			.subscribe(res => this.list$ = res);

		this.list$ = store.select(fromRoot.getItemList);


		console.log('Const XXXXXXX', service);
		this.people = service.getPeople();
		// .map((res) => res)
		// .subscribe((res) => res);
	}

	createNew() {
		// this.service.createPresentation()
		// 	.subscribe(res => console.log('created new', res));
		this.store.dispatch(new list.AddItemAction());
	}

	copyItem(item) { }

	deleteItem(item) {
		this.store.dispatch(new list.RemoveItemAction(item));
	}

	shareItem(item) { }

}
