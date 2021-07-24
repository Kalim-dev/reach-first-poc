import { Card, Button, Form } from "antd";
import { setJob, setJobStep } from "app-redux/actions/job";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import FirstStepForm from "./first-step";

import SecondStepForm from "./second-step";

import ThirdStepForm from "./third-step";

import "./index.scss";
import moment from "moment";

const stepsValues = {
  1: "first",
  2: "second",
  3: "third",
};

const CreateJob = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = useState("first");
  const job = useSelector(({ data }) => data.job);

  useEffect(() => {
    setStep(stepsValues[id]);
  }, [id, history]);

  useEffect(() => {
    if (step && job[step]) {
      if (step === "third") {
        const momentTimes = formatToDates(job[step]);
        form.setFieldsValue(momentTimes);
      } else {
        form.setFieldsValue(job[step]);
      }
    }
  }, [step, form, job]);

  const formatToDates = (values = {}) => {
    return Object.keys(values).reduce((sum, key) => {
      sum[key] = values[key].map((date) => moment(date, "hh:mm"));
      return sum;
    }, {});
  };

  const formatTimes = (values) => {
    return Object.keys(values).reduce((sum, key) => {
      sum[key] = values[key].map((date) => moment(date).format("hh:mm"));
      return sum;
    }, {});
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (step === "third") {
        dispatch(setJobStep(formatTimes(values), step));
        dispatch(setJob());
        history.push(`/jobs`);
      } else {
        dispatch(setJobStep(values, step));
        history.push(`/jobs/create/${Number(id) + 1}`);
      }
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const Title = () => {
    return (
      <div className="card-header">
        <div className="right">
          <div className="x-title">
            {job.id ? "Update" : "Create"} a job post
          </div>
          <div className="x-note">
            Complete the following steps to create an effective job post
          </div>
        </div>
        <div className="left">X</div>
      </div>
    );
  };

  return (
    <div className="create-job-container">
      <Card title={<Title />} className="create-job-card">
        <div className="step-info">Step {id} of 3</div>
        <div className="form-steps">
          <div className={`${id === "1" && "active"}`}>Job Information</div>
          <div className={`${id === "2" && "active"}`}>Candidate Type</div>
          <div className={`${id === "3" && "active"}`}>Shift Timings</div>
        </div>

        <div className="form-area">
          <Switch>
            <Route path="/jobs/create/1">
              <FirstStepForm form={form} />
            </Route>
            <Route path="/jobs/create/2">
              <SecondStepForm form={form} />
            </Route>
            <Route path="/jobs/create/3">
              <ThirdStepForm form={form} />
            </Route>
          </Switch>
        </div>
        <div className="card-actions">
          <Button size="large" className="card-btn" disabled={Number(id) === 1}>
            <Link to={`/jobs/create/${Number(id) - 1}`}>PREVIOUS</Link>
          </Button>
          <Button
            type="primary"
            size="large"
            className="card-btn"
            onClick={onSubmit}
          >
            NEXT
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateJob;
