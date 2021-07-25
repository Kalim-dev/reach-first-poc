import { Button, Card, List, Popover, Table } from "antd";
import { setJobStep, setJobStepId } from "app-redux/actions/job";
import { startCase } from "lodash";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { columns } from "utils";

const JobsMain = () => {
  const jobs = useSelector(({ data }) => data.jobs);
  const dispatch = useDispatch();
  const history = useHistory();

  const onEdit = (record) => {
    const {
      job_title,
      experience,
      education,
      skills,
      description,
      hourly_rate,
      expected_start_date,
      career_level,
      gender,
      equipment_specs,
      shift_timings,
    } = record;

    const stepFirstData = {
      job_title,
      experience,
      education,
      skills,
      description,
    };
    const stepSecondData = {
      hourly_rate,
      expected_start_date: moment(expected_start_date),
      career_level,
      gender,
      equipment_specs,
    };
    const stepThirdData = { ...shift_timings };
    dispatch(setJobStepId(record.id));

    dispatch(setJobStep(stepFirstData));
    dispatch(setJobStep(stepSecondData, "second"));
    dispatch(setJobStep(stepThirdData, "third"));
    history.push("/jobs/create");
  };

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

      if (col.key === "actions") {
        col.render = (_, record) => (
          <>
            <Button type="link" onClick={() => onEdit(record)}>
              Edit
            </Button>
            <Button type="link" danger>
              Delete
            </Button>
          </>
        );
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
