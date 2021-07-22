import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        </Menu>
      </Header>
      <Content className="app-content">
        <div className="app-layout">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
