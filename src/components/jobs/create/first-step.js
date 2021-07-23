import { Form, Input, Row, Col } from "antd";

const FirstStepForm = ({ form }) => {
  return (
    <Form name="basic" initialValues={{ remember: true }} form={form}>
      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            label="Looking For"
            name="job_title"
            rules={[{ required: true, message: "Job title is required" }]}
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
            rules={[{ required: true, message: "Experience is required" }]}
          >
            <Input className="reach-first-input" placeholder="Experience" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={32} className="reach-row">
        <Col span={12}>
          <Form.Item
            label="Education"
            name="education"
            rules={[{ required: true, message: "Education is required!" }]}
          >
            <Input className="reach-first-input" placeholder="Education..." />
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
          <Form.Item name="template">
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
