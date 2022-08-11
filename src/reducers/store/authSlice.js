import { createSlice } from '@reduxjs/toolkit'; 

const user = createSlice({
	name: 'userId',
	initialState: {texto: ''},
	reducers: {
        setUserID: (state, action) => {
            state.texto = action.payload
        },
    }
});

export const { setUserID } = user.actions;

export default user.reducer;
