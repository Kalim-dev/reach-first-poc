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
      const newJobs = state.slice();
      newJobs.unshif(action.payload);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      return state;
  }
};

export default dataReducer;
