import { createStore } from 'redux';
import throttle from 'lodash.throttle';
import rootReducer from '../reducers';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../../util/localstorage';

const persistedState = loadStateFromLocalStorage('todos');

export const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
	throttle(() => {
		saveStateToLocalStorage('todos', {
			todos: store.getState().todos
		});
	}, 1000)
);
