import Booking from "../pages/Booking";
import Login from "./../pages/Login";

export interface IRoutes {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  Login = "/login",
  Booking = "/",
}

export const privateRoutes: IRoutes[] = [
  { path: RouteNames.Booking, exact: true, component: Booking },
];
export const publicRoutes: IRoutes[] = [{ path: RouteNames.Login, exact: true, component: Login }];
