import { Table } from "antd";
import { useSelector } from "react-redux";
import { columns } from "utils";

const JobsMain = () => {
  const jobs = useSelector(({ data }) => data.jobs);
  debugger;
  return (
    <div>
      <Table dataSource={jobs} columns={columns} />
    </div>
  );
};

export default JobsMain;
