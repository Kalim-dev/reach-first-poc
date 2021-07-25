import { Form, Input, Row, InputNumber, Col, Select } from "antd";

import { professions, skills } from "utils/lookups";

const { Option } = Select;
const initialValues = {
  job_title: "Web Developer",
  experience: 1,
  education: "Bachelor ",
  skills: "Software",
};

const educations = [
  "Metric",
  "Intermediate",
  "Bachelor",
  "Master",
  "MS",
  "Phd",
];

const FirstStepForm = ({ form }) => {
  return (
    <Form name="basic" initialValues={initialValues} form={form}>
      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Looking For"
            name="job_title"
            rules={[{ required: true, message: "Job title is required" }]}
          >
            <Select showSearch placeholder="Search Job Title">
              {professions.map((profession) => (
                <Option value={profession} key={profession}>
                  {profession}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Experience"
            name="experience"
            rules={[{ required: true, message: "Experience is required" }]}
          >
            <InputNumber
              className="reach-first-input"
              min={1}
              max={40}
              formatter={(value) => `${value} years`}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Education"
            name="education"
            rules={[{ required: true, message: "Education is required!" }]}
          >
            <Select showSearch placeholder="Search Education">
              {educations.map((profession) => (
                <Option value={profession} key={profession}>
                  {profession}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32} className="reach-row">
        <Col span={24}>
          <Form.Item
            className="reach-form-item"
            label="Skills"
            name="skills"
            rules={[{ required: true, message: "Skills required" }]}
          >
            <Select showSearch placeholder="Search Skills">
              {skills.map((skil) => (
                <Option value={skil} key={skil}>
                  {skil}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={32} className="reach-row">
        <Col span={24}>
          <Form.Item
            className="reach-form-item"
            label="Description"
            name="description"
            rules={[{ required: true, message: "Description is required" }]}
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
          <Form.Item className="reach-form-item" name="template">
            <Input
              type="file"
              className="file-upload"
              placeholder="File"
              onChange={(event) => {
                const [file] = event.target.files;
                const fileUri = URL.createObjectURL(file);
                form.setFieldsValue(form, "template", fileUri);
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FirstStepForm;
