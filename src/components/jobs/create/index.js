import { Card, Button, Form } from "antd";
import { setJobStep } from "app-redux/actions/job";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import FirstStepForm from "./first-step";

import "./index.scss";
import SecondStepForm from "./second-step";
import ThirdStepForm from "./third-step";

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
  }, [id]);

  useEffect(() => {
    if (step) {
      form.setFieldsValue(form, job[step]);
    }
  }, [step, form, job]);

  const renderForm = () => {
    switch (id) {
      case "1":
        return <FirstStepForm form={form} />;
      case "2":
        return <SecondStepForm form={form} />;
      case "3":
        return <ThirdStepForm form={form} />;
      default:
        return <FirstStepForm form={form} />;
    }
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setJobStep(values, step));
      history.push(`/jobs/create/${Number(id) + 1}`);
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const Title = () => {
    return (
      <div className="card-header">
        <div className="right">
          <div className="x-title">create a job post</div>
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

        <div className="form-area">{renderForm()}</div>
        <div className="card-actions">
          <Button size="large" className="card-btn">
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
