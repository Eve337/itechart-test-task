import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { AuthActionCreators } from "../store/reducers/auth/actions-creators";
import { useHistory } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useTypedSelector((state) => state.auth);

  const onFinish = (values: any) => {
    dispatch(AuthActionCreators.login(values.username, values.password));
    /* if (auth) {
      console.log(auth);
      history.push("/");
    } */
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: "Please input your username!" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
