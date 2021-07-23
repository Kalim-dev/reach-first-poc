import { SET_JOB_STEP, RESET_JOB_STEP, SET_JOB } from "config/constants";

/**
 * Set  Job step data
 * @param {*} payload step
 * @returns
 */
export const setJobStep = (payload, step = "first") => {
  return {
    type: SET_JOB_STEP,
    payload: {
      step,
      data: payload,
    },
  };
};
// Reset job
export const resetJobStep = () => {
  return {
    type: RESET_JOB_STEP,
  };
};

// Reset job
export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
