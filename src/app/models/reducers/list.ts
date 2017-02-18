import * as list from '../actions/list';

export interface State {
	loaded: boolean;
	loading: boolean;
	ids: string[];
};

const initialState: State = {
	loaded: false,
	loading: false,
	ids: []
};

export function reducer(state = initialState, action: list.Actions): State {
	switch (action.type) {
		case list.ActionTypes.LOAD: {
			return Object.assign({}, state, {
				loading: true
			});
		}

		case list.ActionTypes.LOAD_SUCCESS: {
			console.log('action LOAD_SUCCESS', action);
			// const items = action.payload;
			//
			// return {
			// 	loaded: true,
			// 	loading: false,
			// 	ids: items.map(item => item.id)
			// };
			return state;
		}

		// case list.ActionTypes.ADD_ITEM_SUCCESS:
		// case list.ActionTypes.REMOVE_ITEM_FAIL: {
		// 	const item = action.payload;
		//
		// 	if (state.ids.indexOf(item.id) > -1) {
		// 		return state;
		// 	}
		//
		// 	return Object.assign({}, state, {
		// 		ids: [...state.ids, item.id]
		// 	});
		// }
		//
		// case list.ActionTypes.REMOVE_ITEM_SUCCESS:
		// case list.ActionTypes.ADD_ITEM_FAIL: {
		// 	const item = action.payload;
		//
		// 	return Object.assign({}, state, {
		// 		ids: state.ids.filter(id => id !== item.id)
		// 	});
		// }

		default: {
			return state;
		}
	}
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
