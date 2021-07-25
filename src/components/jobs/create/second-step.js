import { Form, Input, InputNumber, DatePicker, Select, Row, Col } from "antd";
import moment from "moment";
const { Option } = Select;
const levels = [
  "Intern",
  "Entry Level",
  "Experienced",
  "Advanced",
  "Professional",
  "Executive",
];

const SecondStepForm = ({ form }) => {
  return (
    <Form
      name="basic"
      form={form}
      initialValues={{
        hourly_rate: 10,
        expected_start_date: moment(),
        gender: "Male",
      }}
    >
      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Hourly Rate"
            name="hourly_rate"
            rules={[{ required: true, message: "Hourly rate is required" }]}
          >
            <InputNumber
              className="reach-first-input"
              min={10}
              placeholder="Enter Hourlt Rate"
              formatter={(value) => `$${value} /Hour`}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Expected Start Date"
            name="expected_start_date"
            rules={[{ required: true, message: "Start Date is required" }]}
          >
            <DatePicker placeholder="Expectd Start Date" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Career Level"
            name="career_level"
            rules={[{ required: true, message: "Career Level is required!" }]}
          >
            <Select showSearch placeholder="Search Career Level">
              {levels.map((level) => (
                <Option value={level}>{level}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Gender is required!" }]}
          >
            <Select placeholder="Select Gender">
              {["Male", "Female"].map((level) => (
                <Option value={level} key={level}>
                  {level}
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
            label="Experience Description"
            name="equipment_specs"
            rules={[
              { required: true, message: "Experience Description is required" },
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
    </Form>
  );
};

export default SecondStepForm;
