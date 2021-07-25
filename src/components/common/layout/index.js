import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, Route } from "react-router-dom";
import "./index.scss";

const { Header, Content, Footer } = Layout;

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    document.title = "Reach First";
  }, []);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[`${selected}`]}
        >
          <Menu.Item key="/jobs">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="/api">
            <Link to="/api">APIs</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About Us</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="app-content">
        <div className="app-layout">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        POC Interview Task created by Kalim Ullah | javascript developer....
      </Footer>
    </Layout>
  );
};

export default MainLayout;
