const ACTIONS = {
  LOGGED_IN: 'global/loggedIn',
  USER_DATA: 'global/userData',
  STORE_USER_DATA: 'global/storeUserData',
  ALERT: 'global/alert',
  POST_A_JOB: 'job/postAJob'
}
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT= 'REMOVE_ALERT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL= 'REGISTER_FAIL';
export const GET_COUNTIRES_LIST = 'GET_COUNTIRES_LIST';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILES = 'GET_PROFILES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const PROFILE_ERROR = 'PROFIL_ERROR';
export const GET_ACTIVE_JOBS = 'GET_ACTIVE_JOBS';
export const GET_FAV_WORKERS = 'GET_FAV_WORKERS';
export const JOBS_ERROR = 'JOBS_ERROR';
export const FAV_ERROR = 'FAV_ERROR';
export const POST_A_JOB = 'POST_A_JOB';
export const CLEAR_JOB_POST = 'CLEAR_JOB_POST';
export const USER_TRANSECTION_DETAILS = 'USER_TRANSECTION_DETAILS';
export const BILLING_ERROR = 'BILLING_ERROR';
export const GET_PROGRESS = 'GET_PROGRESS';
export const GET_PLAN_LIST = 'GET_PLAN_LIST';
export const GET_PLAN_LIST_ERROR = 'GET_PLAN_LIST_ERROR';

// Javed
export const GET_SKILLS = 'GET_SKILLS';
export const GET_SKILLS_ERROR = 'GET_SKILLS_ERROR';
export const GET_JOB_DETAIL = 'GET_JOB_DETAIL';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const GET_COUNTIRES_LIST_ERROR = 'GET_COUNTIRES_LIST_ERROR';

//JAVED Dashboard-Work
export const GET_APPLIED_JOBS = 'GET_APPLIED_JOBS';
export const GET_APPLIED_JOBS_ERROR = 'GET_APPLIED_JOBS_ERROR';
export const GET_MATCHING_JOBS = 'GET_MATCHING_JOBS';
export const GET_MATCHING_JOBS_ERROR = 'GET_MATCHING_JOBS_ERROR';
export const GET_LATEST_JOBS = 'GET_LATEST_JOBS';
export const GET_LATEST_JOBS_ERROR = 'GET_LATEST_JOBS_ERROR';


export default { ACTIONS };