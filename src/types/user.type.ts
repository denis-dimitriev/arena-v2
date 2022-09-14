export type IUserType = {} | null

export interface IUserFetch {
  user: IUserType
  loading: boolean;
  error: string | null;
}
