import { Card, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import FirstStepForm from "./first-step";

import "./index.scss";
import SecondStepForm from "./second-step";
import ThirdStepForm from "./third-step";

const CreateJob = () => {
  const { id } = useParams();

  const renderForm = () => {
    switch (id) {
      case "1":
        return <FirstStepForm />;
      case "2":
        return <SecondStepForm />;
      case "3":
        return <ThirdStepForm />;
      default:
        return <FirstStepForm />;
    }
  };

  const Title = () => {
    return (
      <div className="card-header">
        <div className="right">
          <div className="x-title">create a job post</div>
          <div className="x-note">
            Complete the folliwng steps to create an effective job post
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
          <Button type="primary" size="large" className="card-btn">
            <Link to={`/jobs/create/${Number(id) + 1}`}>NEXT</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateJob;
