import { List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const ApiCallDemo = () => {
  const [data, setData] = useState([]);

  const getUsersApi = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  return (
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
  );
};

export default ApiCallDemo;
