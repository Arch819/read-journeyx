import { IRootState } from '../reducer';

export const selectIsLoading = (state: IRootState) => state.appState.isLoading;
export const selectError = (state: IRootState) => state.appState.error;
export const selectPopUp = (state: IRootState) => state.appState.popUp;
export const selectIsMobile = (state: IRootState) => state.appState.isMobile;
