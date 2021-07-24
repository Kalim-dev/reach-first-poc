import { Form, Input, Row, Col } from "antd";

const SecondStepForm = ({ form }) => {
  return (
    <Form name="basic" form={form}>
      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Hourly Rate"
            name="hourly_rate"
            rules={[{ required: true, message: "Hourly rate is required" }]}
          >
            <Input
              className="reach-first-input"
              placeholder="Enter Hourlt Rate"
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
            <Input
              className="reach-first-input"
              placeholder="Expectd Start Date"
            />
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
            <Input
              className="reach-first-input"
              placeholder="Career Level..."
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="reach-form-item"
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Gender is required!" }]}
          >
            <Input className="reach-first-input" placeholder="Gender..." />
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
