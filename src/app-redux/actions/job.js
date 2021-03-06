import {
  SET_JOB_STEP,
  RESET_JOB_STEP,
  SET_JOB,
  SET_JOB_STEP_ID,
  SET_JOB_DELETE,
  SET_NOTIFICATION,
} from "config/constants";

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

export const setJobStepId = (id) => {
  return {
    type: SET_JOB_STEP_ID,
    payload: id,
  };
};
export const setJobDelete = (id) => {
  return {
    type: SET_JOB_DELETE,
    payload: id,
  };
};
export const setNotifications = (message) => {
  return {
    type: SET_NOTIFICATION,
    payload: message,
  };
};
