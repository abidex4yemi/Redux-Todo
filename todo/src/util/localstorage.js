export const loadStateFromLocalStorage = stateKey => {
	try {
		const serializedState = localStorage.getItem(stateKey);
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveStateToLocalStorage = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		return err;
	}
};
