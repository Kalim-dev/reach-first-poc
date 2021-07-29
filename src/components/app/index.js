import { Drawer, List } from "antd";
import ApiCallDemo from "components/api-call-demo";
import MainLayout from "components/common/layout";
import Jobs from "components/jobs";
import AppContext from "context";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Counter from "components/counter";
const MainApp = () => {
  const [showNotification, setShowNotifications] = useState(false);

  const { notifications = [] } = useSelector(({ app }) => app);

  return (
    <AppContext.Provider value={{ setShowNotifications, showNotification }}>
      <MainLayout>
        <Switch>
          <Route path={"/api"} exact>
            <ApiCallDemo />
          </Route>
          <Route path={"/jobs"}>
            <Jobs />
          </Route>
          <Route path={"/state"}>
            <Counter />
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
