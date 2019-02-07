import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import AntdDemo from './antd-demo';
const { Header, Content } = Layout;
const MenuItem = Menu.Item;

const BaseLayout = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="dark">
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/me">Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/register">Register</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/antd-demo">AntdDemo</Link>
        </MenuItem>
      </Menu>
    </Header>
    <Content>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/me" component={ProfilePage} />
      <Route path="/antd-demo" component={AntdDemo} />
    </Content>
  </Layout>
);

const HomePage = () => <div>This is a Home Page</div>;
const LoginPage = () => <div>This is a Login Page</div>;
const RegisterPage = () => <div>This is a Register Page</div>;
const ProfilePage = () => <div>This is a Profile Page</div>;
const AboutPage = () => <div>This is a About Page</div>;
const ContactPage = () => <div>This is a Contact Page</div>;

export default BaseLayout;
