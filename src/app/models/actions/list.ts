import { Action } from '@ngrx/store';

import { Item } from '../app.model';
import { type } from '../../core/util/util';

export const ActionTypes = {
	ADD_ITEM: type('[List] Add Item'),
	ADD_ITEM_SUCCESS: type('[List] Add Item Success'),
	ADD_ITEM_FAIL: type('[List] Add Item Fail'),
	REMOVE_ITEM: type('[List] Remove Item'),
	REMOVE_ITEM_SUCCESS: type('[List] Remove Item Success'),
	REMOVE_ITEM_FAIL: type('[List] Remove Item Fail'),
	LOAD: type('[List] Load'),
	LOAD_SUCCESS: type('[List] Load Success'),
	LOAD_FAIL: type('[List] Load Fail'),
};

/**
 * Add Item to List Actions
 */
export class AddItemAction implements Action {
	type = ActionTypes.ADD_ITEM;

	constructor() { }
}

export class AddItemSuccessAction implements Action {
	type = ActionTypes.ADD_ITEM_SUCCESS;

	constructor(public payload: Item) { }
}

export class AddItemFailAction implements Action {
	type = ActionTypes.ADD_ITEM_FAIL;

	constructor(public payload: any) { }
}


/**
 * Remove Item from List Actions
 */
export class RemoveItemAction implements Action {
	type = ActionTypes.REMOVE_ITEM;

	constructor(public payload: Item) { }
}

export class RemoveItemSuccessAction implements Action {
	type = ActionTypes.REMOVE_ITEM_SUCCESS;

	constructor(public payload: any) { }
}

export class RemoveItemFailAction implements Action {
	type = ActionTypes.REMOVE_ITEM_FAIL;

	constructor(public payload: any) { }
}

/**
 * Load List Actions
 */
export class LoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor() { }
}

export class LoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: Item[]) { }
}

export class LoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) { }
}

export type Actions
	= AddItemAction
	| AddItemSuccessAction
	| AddItemFailAction
	| RemoveItemAction
	| RemoveItemSuccessAction
	| RemoveItemFailAction
	| LoadAction
	| LoadSuccessAction
	| LoadFailAction;
