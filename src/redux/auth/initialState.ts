export interface IAuthState {
  profile: {
    name: string;
    email: string;
  };
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export const initialState: IAuthState = {
  profile: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: true,
};
