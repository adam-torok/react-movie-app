import { createSlice } from '@reduxjs/toolkit';

const storageKey = 'react-movie-dark-mode';

const setInitDarkMode = () => {
    let mode = JSON.parse(localStorage.getItem(storageKey));
    if(mode){
        document.querySelector('#root').classList.add('dark');
        return true;
    }else{
        document.querySelector('#root').classList.remove('dark');
        return false;
    }
};

const setToDark = () => {
	localStorage.setItem(storageKey, JSON.stringify(true));
	document.querySelector('#root').classList.add('dark');
	return true;
};

const setToLight = () => {
	localStorage.setItem(storageKey, JSON.stringify(false));
	document.querySelector('#root').classList.remove('dark');
	return false;
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		darkMode: setInitDarkMode()
	},
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
            console.log(state.darkMode);
			if (state.darkMode) {
				setToDark();
			} else {
				setToLight();
			}
		}
	}
});

export const { toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
