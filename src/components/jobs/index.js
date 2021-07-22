import { Route, Switch, useRouteMatch } from "react-router-dom";
import JobsMain from "./main";

const Jobs = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`}>
        <JobsMain />
      </Route>
    </Switch>
  );
};

export default Jobs;
