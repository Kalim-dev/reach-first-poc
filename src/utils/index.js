import moment from "moment";

export const columns = [
  {
    title: "Name",
    dataIndex: "job_title",
    key: "job_title",
  },
  {
    title: "Experience",
    dataIndex: "experience",
    key: "experience",
  },
  {
    title: "Skills",
    dataIndex: "skills",
    key: "skills",
  },
  {
    title: "Hourly Rate",
    dataIndex: "hourly_rate",
    key: "hourly_rate",
  },
  {
    title: "Start Date",
    dataIndex: "expected_start_date",
    key: "expected_start_date",
    render: (value) => moment(value).format("LL"),
  },
  {
    title: "Career Level",
    dataIndex: "career_level",
    key: "career_level",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Timings",
    dataIndex: "shift_timings",
    key: "shift_timings",
  },
  {
    title: "Actions",
    key: "actions",
  },
];
