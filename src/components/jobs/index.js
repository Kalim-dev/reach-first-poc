import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import CreateJob from "./create";
import JobsMain from "./main";

const Jobs = () => {
  const { path } = useRouteMatch();

  console.log({ path });

  return (
    <Switch>
      <Route path={`${path}/create/:id(1|2|3)`} exact>
        <CreateJob />
      </Route>

      <Route path={`${path}`} exact>
        <JobsMain />
      </Route>
      <Redirect from={`${path}/create`} to={`${path}/create/1`} />
    </Switch>
  );
};

export default Jobs;
