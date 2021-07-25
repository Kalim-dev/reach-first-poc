import { Button, Card, Input, List, Popover, Table } from "antd";
import { setJobDelete, setJobStep, setJobStepId } from "app-redux/actions/job";
import { startCase } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { columns } from "utils";

const JobsMain = () => {
  const jobs = useSelector(({ data }) => data.jobs);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  const onChange = (event) => {
    const { value } = event.target;

    if (value) {
      const filterData = jobs.slice().filter((item) => {
        return item.job_title.toLowerCase().includes(value.toLowerCase());
      });

      setData(filterData);
    } else {
      setData(jobs);
    }
  };

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
  const onDelete = (id) => {
    dispatch(setJobDelete(id));
  };

  const getColumns = () => {
    return columns.map((col) => {
      if (col.key === "shift_timings") {
        col.render = (shifts) => {
          const shiftData = Object.keys(shifts).map((key) => {
            return { key, value: shifts[key] };
          });

          const getShifttext = (time) => {
            const [from, to] = time;

            return `${from} to ${to}`;
          };
          return (
            <Popover
              placement="topLeft"
              title={"Shifts"}
              content={
                <List
                  dataSource={shiftData}
                  renderItem={(item) => (
                    <List.Item extra={getShifttext(item.value)}>
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
            <Button type="link" onClick={() => onDelete(record.id)} danger>
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
        <div style={{ display: "flex" }}>
          <Input placeholder="Search job title" onChange={onChange} />
          <Link to="/jobs/create">
            <Button type="link">Create</Button>
          </Link>
        </div>
      }
    >
      <Table dataSource={data} columns={getColumns()} size="small" />
    </Card>
  );
};

export default JobsMain;
