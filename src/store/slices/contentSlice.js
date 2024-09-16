import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
	name: 'content',
	initialState: {
		innerHeight: window.innerHeight,
		innerFoodHeight: window.innerHeight - 96 - 32 - 32,
		innerContainerHeight: window.innerHeight - 32,
	},
	reducers: {},
	extraReducers: () => {},
});

export const contentActions = contentSlice.actions;
export default contentSlice;
