import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import token from "../features/slices/tokenSlice";
import user from "../features/slices/userSlice";

const preloadedState = JSON.parse(localStorage.getItem('state') || '{}');
const store = configureStore({
    reducer: {
        user, token
    },
    preloadedState
});

store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())));

export {store};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
