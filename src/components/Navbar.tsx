import React from "react";
import { Layout, Menu } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/actions-creators";

export default function Navbar() {
  const { auth, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(AuthActionCreators.logout());
  };
  return auth ? (
    <Layout.Header>
      <Menu theme='dark' mode='horizontal' selectable={false} className='justifyEnd'>
        <Menu.Item key={1}>{localStorage.getItem("login")}</Menu.Item>
        <Menu.Item key={2} onClick={signout}>
          Sign out
        </Menu.Item>
      </Menu>
    </Layout.Header>
  ) : (
    <Layout.Header>
      <Menu theme='dark' mode='horizontal' selectable={false} className='justifyEnd'>
        <Menu.Item key={3}>Login</Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
