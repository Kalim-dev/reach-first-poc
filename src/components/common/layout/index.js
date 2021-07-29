import { Layout, Menu, Badge, Button } from "antd";
import AppContext from "context";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const { Header, Content, Footer } = Layout;

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const { notifications = [] } = useSelector(({ app }) => app);

  const { setShowNotifications, showNotification } = useContext(AppContext);

  useEffect(() => {
    document.title = "Reach First";
  }, []);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  const toggleNotification = () => {
    setShowNotifications(!showNotification);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="header-menues">
          <div>
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

              <Menu.Item key="/state">
                <Link to="/state">State Counter</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="left-menu">
            <Badge count={notifications.length}>
              <Button type="link" onClick={toggleNotification}>
                <img
                  width="32"
                  height="32"
                  alt="notification icon"
                  src="data:image/png;base64,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"
                />
              </Button>
            </Badge>
          </div>
        </div>
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
