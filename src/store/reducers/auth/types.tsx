import { IUser } from "../../../models/IUsers";

export interface AuthState {
  auth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}
export interface SetAuthErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}
export interface SetAuthUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}
export interface SetAuthLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export type AuthAction =
  | SetAuthAction
  | SetAuthErrorAction
  | SetAuthUserAction
  | SetAuthLoadingAction;
