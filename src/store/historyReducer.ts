import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Predict {
    firstName: string
    age: number
}

interface HistoryState {
    predicts: Predict[];
}

const initialState: HistoryState = {
    predicts: []
}


export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addPredict : (state, action: PayloadAction<Predict>) => {
            const temp = [...state.predicts];
            const existingIndex = temp.findIndex(predict => predict.firstName.toLowerCase() === action.payload.firstName.toLowerCase());
            if (existingIndex !== -1) {
                const existingPredict = temp[existingIndex];
                temp.splice(existingIndex, 1);
                temp.unshift(existingPredict);
            } else {
                temp.unshift(action.payload);
                if(temp.length > 10) temp.pop();
            }
            state.predicts = temp;
        }
    },
})

export const { addPredict } = historySlice.actions;
export default historySlice.reducer;