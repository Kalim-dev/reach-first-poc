import { List, Spin, Form, Input, Button, Row, Col, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const ApiCallDemo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitData = async (data) => {
    setLoading(true);
    try {
      await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/users",
        data: data,
      });

      message.success("Data successfully saved");
    } catch (error) {
      console.log(error);
      message.error("Failed to save data");
    } finally {
      setLoading(false);
    }
  };

  const getUsersApi = () => {
    setLoading(true);

    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        console.log(response.data);
        setLoading(false);

        setData(response.data);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinishForm = (values) => {
    submitData(values);
  };

  const renderDemo = () => {
    return (
      <Row>
        <Col span={12}>
          <>
            <h3>Data Users Fetch</h3>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(user) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{user.name}</a>}
                    description={user.email}
                  >
                    {user.address.street}
                  </List.Item.Meta>
                </List.Item>
              )}
            />
          </>
        </Col>
        <Col span={12}>
          <h3>Data Users Post</h3>

          <Form
            {...layout}
            onFinish={onFinishForm}
            name="nest-messages" /*onFinish={onFinish} validateMessages={validateMessages}*/
          >
            <Form.Item
              name={["name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["username"]}
              label="Username"
              rules={[
                {
                  required: "Username is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: "Email is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["address", "street"]} label="Street">
              <Input />
            </Form.Item>
            <Form.Item name={["address", "city"]} label="City">
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  };

  if (loading === true) {
    return <Spin tip="Loading...">{renderDemo()}</Spin>;
  }

  return renderDemo();
};

export default ApiCallDemo;
