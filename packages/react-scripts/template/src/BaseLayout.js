import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import AntdDemo from './pages/antd-demo';
import ApolloDemo from './pages/apollo-demo';
import styles from './BaseLayout.less';

const { Header, Content } = Layout;
const MenuItem = Menu.Item;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};
const BaseLayout = () => {
  const layout = (
    <Layout style={{ minHeight: '100vh' }}>
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
          <MenuItem>
            <Link to="/apollo-demo">ApolloDemo</Link>
          </MenuItem>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/me" component={ProfilePage} />
        <Route path="/antd-demo" component={AntdDemo} />
        <Route path="/apollo-demo" component={ApolloDemo} />
      </Content>
    </Layout>
  );
  return (
    <ContainerQuery query={query}>
      {params => <div className={classNames(params)}>{layout}</div>}
    </ContainerQuery>
  );
};

const HomePage = () => <div>This is a Home Page</div>;
const LoginPage = () => <div>This is a Login Page</div>;
const RegisterPage = () => <div>This is a Register Page</div>;
const ProfilePage = () => <div>This is a Profile Page</div>;
const AboutPage = () => <div>This is a About Page</div>;
const ContactPage = () => <div>This is a Contact Page</div>;

export default BaseLayout;
