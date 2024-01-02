import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Navbar from './header';

function Login() {
  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <>
    <Navbar/>
        <div className="login-contain">
            
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
      <p>Login form</p>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/signup">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item className='subone'>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
      </div>
        
    </>
  );
};

export default Login;