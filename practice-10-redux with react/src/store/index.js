import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterInitialValue = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialValue,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter * action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authInitial = {
  auth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitial,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
