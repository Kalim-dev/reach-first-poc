import { Divider, TimePicker, Row, Col, Form } from "antd";
import moment from "moment";
import "./index.scss";

const { RangePicker } = TimePicker;
const format = "HH:mm";

const initalTime = [moment("09:00", format), moment("05:00", format)];
const initialValues = {
  sunday: initalTime,
  monday: initalTime,
  tuesday: initalTime,
  wednesday: initalTime,
  thursday: initalTime,
  friday: initalTime,
  saturday: initalTime,
};

const ThirdStepForm = ({ form }) => {
  return (
    <div className="third-step">
      <div className="notes">Schedule working days and timings</div>
      <Divider />
      <div className="week-days">
        <div className="in-active">S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div className="in-active">S</div>
      </div>
      <Form form={form} initialValues={initialValues}>
        <Row className="reach-row" gutter={32}>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Sunday"
              name="sunday"
              rules={[{ required: true, message: "Sunday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Monday"
              name="monday"
              rules={[{ required: true, message: "Monday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="reach-row" gutter={32}>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Tuesday"
              name="tuesday"
              rules={[{ required: true, message: "Tuesday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Wednesday"
              name="wednesday"
              rules={[{ required: true, message: "Wednesday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="reach-row" gutter={32}>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Thursday"
              name="thursday"
              rules={[{ required: true, message: "Thursday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Friday"
              name="friday"
              rules={[{ required: true, message: "Friday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="reach-row" gutter={32}>
          <Col span={12}>
            <Form.Item
              className="time-picker"
              label="Saturday"
              name="saturday"
              rules={[{ required: true, message: "Saturday is required!" }]}
            >
              <RangePicker
                className="reach-picker"
                defaultValue={[
                  moment("09:00", format),
                  moment("05:00", format),
                ]}
                separator={"to"}
                format={format}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ThirdStepForm;
