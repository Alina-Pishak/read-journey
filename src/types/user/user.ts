export interface IUSer {
  name: string;
  email: string;
  password: string;
  refreshToken?: string;
  token?: string;
}

export interface IUSerState {
  user: IUSer | null;
}
