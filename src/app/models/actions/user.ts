import { Action } from '@ngrx/store';
import { type } from '../../core/util/util';

export const ActionTypes = {
	LOGIN: type('[User] Login'),
	LOGIN_OUT: type('[User] Login Out'),
};

export class LoginAction implements Action {
	type = ActionTypes.LOGIN;

	constructor(public payload: any) { }
}

export class LogoutAction implements Action {
	type = ActionTypes.LOGIN_OUT;

	constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
	= LoginAction
	| LogoutAction;
