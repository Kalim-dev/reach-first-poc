import MainLayout from "components/common/layout";
import Jobs from "components/jobs";
import { Redirect, Route, Switch } from "react-router-dom";

const MainApp = () => {
  return (
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
    </MainLayout>
  );
};

export default MainApp;
