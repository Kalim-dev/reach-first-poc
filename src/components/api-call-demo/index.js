import { findAllByTestId } from "@testing-library/react";
import { List, Spin } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const ApiCallDemo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {loading === true && <Spin tip="loading" />}
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
  );
};

export default ApiCallDemo;
