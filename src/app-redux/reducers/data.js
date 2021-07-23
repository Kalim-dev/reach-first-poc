import { RESET_JOB_STEP, SET_JOB, SET_JOB_STEP } from "config/constants";
import jobs from "utils/jobs.json";

const initState = {
  jobs,
  job: {},
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_JOB_STEP:
      const { step, data } = action.payload;

      return {
        ...state,
        job: {
          ...state.job,
          [step]: {
            ...state.job[step],
            ...data,
          },
        },
      };
    case RESET_JOB_STEP:
      return {
        ...state,
        job: {},
      };
    case SET_JOB:
      const newJobs = state.jobs.slice();
      const createdJob = {
        ...(state.job.first || {}),
        ...(state.job.second || {}),
        shift_timings: state.job.third || {},
      };
      newJobs.unshift(createdJob);
      return {
        ...state,
        jobs: newJobs,
        job: {},
      };
    default:
      return state;
  }
};

export default dataReducer;
