import { Card } from "antd";
import { Link, useParams } from "react-router-dom";

import "./index.scss";

const CreateJob = () => {
  const { id } = useParams();

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

        <div className="form-area">
          This is form area
          <Link to={`/jobs/create/${Number(id) + 1}`}>Next</Link>
        </div>
      </Card>
    </div>
  );
};

export default CreateJob;
