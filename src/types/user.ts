import { Region } from './general';

export type IUserType = {} | null;

export interface IUserFetch {
  user: IUserType;
  loading: boolean;
  error: string | null;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  address?: string;
  contact?: string;
  photo?: string;
  password: string;
  accountCreatedAt: Date;
  region?: Region;
  rating?: '1' | '2' | '3' | '4' | '5';
  ads?: [];
  adsHistory?: [];
  favorites?: [];
  watchedHistory?: [];
  messages?: [];
}
