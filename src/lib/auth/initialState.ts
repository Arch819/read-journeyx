export interface IAuthState {
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export const initialState: IAuthState = {
  name: '',
  email: '',
  token: '',
  refreshToken: '',
  isLoggedIn: false,
  isRefreshing: true,
};
