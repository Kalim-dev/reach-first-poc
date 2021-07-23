import { Card, Form, Button, Input, Row, Col } from "antd";
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
          <Form name="basic" initialValues={{ remember: true }}>
            <Row gutter={32} className="reach-row">
              <Col span={12}>
                <Form.Item
                  label="Looking For"
                  name="job_title"
                  rules={[{ required: true, message: "JOb title is required" }]}
                >
                  <Input
                    className="reach-first-input"
                    placeholder="Enter Job title"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Experience"
                  name="experience"
                  rules={[
                    { required: true, message: "Experience is required" },
                  ]}
                >
                  <Input
                    className="reach-first-input"
                    placeholder="Experience"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={32} className="reach-row">
              <Col span={12}>
                <Form.Item
                  label="Education"
                  name="education"
                  rules={[
                    { required: true, message: "Education is required!" },
                  ]}
                >
                  <Input
                    className="reach-first-input"
                    placeholder="Education..."
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={32} className="reach-row">
              <Col span={24}>
                <Form.Item
                  label="Skills"
                  name="skills"
                  rules={[{ required: true, message: "Skills required" }]}
                >
                  <Input className="reach-first-input" placeholder="Skills" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={32} className="reach-row">
              <Col span={24}>
                <Form.Item
                  label="Description"
                  name="desciption"
                  rules={[
                    { required: true, message: "Description is required" },
                  ]}
                >
                  <Input.TextArea
                    className="reach-first-input"
                    placeholder="desciption"
                    rows={4}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={32} className="reach-row">
              <Col span={24}>
                <Form.Item
                  name="template"
                  rules={[{ required: true, message: "Skills required" }]}
                >
                  <Input
                    type="file"
                    className="file-upload"
                    placeholder="File"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
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
