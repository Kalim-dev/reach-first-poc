import ApiCallDemo from "components/api-call-demo";
import MainLayout from "components/common/layout";
import Jobs from "components/jobs";
import About from "components/about";
import { Redirect, Route, Switch } from "react-router-dom";

const MainApp = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={"/api"} exact>
          <ApiCallDemo />
        </Route>
        <Route path={"/jobs"}>
          <Jobs />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Redirect from="/" to="/jobs" />
      </Switch>
    </MainLayout>
  );
};

export default MainApp;
