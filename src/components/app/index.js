import { Drawer, List } from "antd";
import MainLayout from "components/common/layout";
import Jobs from "components/jobs";
import AppContext from "context";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

const MainApp = () => {
  const [showNotification, setShowNotifications] = useState(false);

  const { notifications = [] } = useSelector(({ app }) => app);

  return (
    <AppContext.Provider value={{ setShowNotifications, showNotification }}>
      <MainLayout>
        <Switch>
          <Route path={"/api"} exact>
            Here show APIS calls componenets
          </Route>
          <Route path={"/jobs"}>
            <Jobs />
          </Route>
          <Redirect from="/" to="/jobs" />
        </Switch>

        <Drawer
          title="Notifications"
          placement="right"
          width={450}
          closable={false}
          onClose={() => setShowNotifications(!showNotification)}
          visible={showNotification}
        >
          <List
            bordered
            dataSource={notifications}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Drawer>
      </MainLayout>
    </AppContext.Provider>
  );
};

export default MainApp;
