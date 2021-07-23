import { Button, Card, List, Popover, Table } from "antd";
import { startCase } from "lodash";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns } from "utils";

const JobsMain = () => {
  const jobs = useSelector(({ data }) => data.jobs);

  const getColumns = () => {
    return columns.map((col) => {
      if (col.key === "shift_timings") {
        col.render = (shifts) => {
          const shiftData = Object.keys(shifts).map((key) => {
            return { key, value: shifts[key] };
          });
          return (
            <Popover
              placement="topLeft"
              title={"Shifts"}
              content={
                <List
                  dataSource={shiftData}
                  renderItem={(item) => (
                    <List.Item extra={item.value}>
                      <List.Item.Meta description={startCase(item.key)} />
                    </List.Item>
                  )}
                />
              }
              trigger="click"
            >
              <Button type="link">See Shifts</Button>
            </Popover>
          );
        };
      }

      return col;
    });
  };

  return (
    <Card
      title="Jobs"
      bordered={false}
      extra={
        <Link to="/jobs/create">
          <Button type="link">Create</Button>
        </Link>
      }
    >
      <Table dataSource={jobs} columns={getColumns()} size="small" />
    </Card>
  );
};

export default JobsMain;
