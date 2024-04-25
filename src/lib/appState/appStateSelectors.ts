import { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.appState.isLoading;
export const selectError = (state: RootState) => state.appState.error;
export const selectPopUp = (state: RootState) => state.appState.popUp;
export const selectDevice = (state: RootState) => state.appState.device;
