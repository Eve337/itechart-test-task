import { Layout } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { IUser } from "./models/IUsers";
import { AuthActionCreators } from "./store/reducers/auth/actions-creators";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser({ username: localStorage.getItem("login") } as IUser));
    }
  }, []);

  return (
    <div className='App'>
      <Layout>
        <Navbar />
        <Layout.Content className='mainContent'>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
