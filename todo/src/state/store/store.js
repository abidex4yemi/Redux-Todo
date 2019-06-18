import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../../util/localstorage';

const persistedState = loadStateFromLocalStorage('todos');

export const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	saveStateToLocalStorage('todos', {
		todos: store.getState().todos
	});
});
