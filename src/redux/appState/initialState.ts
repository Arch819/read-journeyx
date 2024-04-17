export interface IAppState {
  isLoading: boolean;
  error: string | null;
  popUp: string;
  isMobile: boolean;
}

export const initialState: IAppState = {
  isLoading: false,
  error: null,
  popUp: '',
  isMobile: true,
};
