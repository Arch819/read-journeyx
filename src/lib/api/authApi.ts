import axios from 'axios';
import { ICredentials } from '../auth/authThunk';

export interface ICredentialsPayload {
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  _id?: string;
}

export interface IRefreshTokenPayload {
  token: string;
  refreshToken: string;
}

export interface ISignOutPayload {
  message: string;
}

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const { data } = await axios(`users/${relativeUrl}`);
  return data as TBody;
}

async function post<TBody>(
  relativeUrl: string,
  body?: ICredentials,
): Promise<TBody> {
  const { data } = await axios.post(`users/${relativeUrl}`, body);
  return data as TBody;
}

interface IAuthApi {
  getCurrent: (token:string) => Promise<ICredentialsPayload>;
  refresh: (token:string) => Promise<IRefreshTokenPayload>;
  signIn: (credentials: ICredentials) => Promise<ICredentialsPayload>;
  signUp: (credentials: ICredentials) => Promise<ICredentialsPayload>;
  signOut: () => Promise<ISignOutPayload>;
}

export const authApi: IAuthApi = {
  //GET
  getCurrent: async (token) => {
    setToken(token)
    return await get<ICredentialsPayload>('current');
  },
  refresh: async () => {
    return await get<IRefreshTokenPayload>('current/refresh');
  },

  //POST
  signIn: async (credentials) => {
    const data = await post<ICredentialsPayload>('signin', credentials);
    setToken(data.token)
    return data
  },
  signUp: async (credentials) => {
    const data= await post<ICredentialsPayload>('signup', credentials);
    setToken(data.token)
    return data
  },
  signOut: async () => {
    const data = await post<ISignOutPayload>('signout');
    removeToken()
    return data
  },
};
