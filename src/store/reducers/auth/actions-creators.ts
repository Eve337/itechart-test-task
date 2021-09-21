import { AppDispatch } from "./../../index";
import { IUser } from "./../../../models/IUsers";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetAuthErrorAction,
  SetAuthLoadingAction,
  SetAuthUserAction,
} from "./types";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: IUser): SetAuthUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsLoading: (payload: boolean): SetAuthLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setError: (payload: string): SetAuthErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const mockUsers = await axios.get<IUser[]>("./users.json");
      const findCurrentUser = mockUsers.data.find(
        (user: IUser) => user.username === username && user.password === password
      );
      if (findCurrentUser) {
        localStorage.setItem("login", findCurrentUser.username);
        localStorage.setItem("auth", "true");
        dispatch(AuthActionCreators.setUser(findCurrentUser));
        dispatch(AuthActionCreators.setIsAuth(true));
      } else {
        console.log("Smth wrong");
      }
      console.log(mockUsers);
    } catch (e) {
      dispatch(AuthActionCreators.setError("Error"));
    }
    dispatch(AuthActionCreators.setIsLoading(false));
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("login");
    localStorage.removeItem("auth");
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
  },
};
