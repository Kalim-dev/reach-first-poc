import {
  RESET_JOB_STEP,
  SET_JOB,
  SET_JOB_STEP,
  SET_JOB_STEP_ID,
} from "config/constants";
import jobs from "utils/jobs.json";
import { v4 as uuidv4 } from "uuid";

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
    case SET_JOB_STEP_ID:
      return {
        ...state,
        job: {
          ...state.job,
          id: action.payload,
        },
      };
    case SET_JOB:
      let newJobs = state.jobs.slice();

      const createdJob = {
        ...(state.job.first || {}),
        ...(state.job.second || {}),
        shift_timings: state.job.third || {},
        id: state.job.id,
      };
      if (!createdJob.id) {
        createdJob.id = uuidv4();
        newJobs.unshift(createdJob);
      } else {
        newJobs = newJobs.map((job) => {
          if (job.id === createdJob.id) {
            return {
              ...job,
              ...createdJob,
            };
          }
          return job;
        });
      }

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
