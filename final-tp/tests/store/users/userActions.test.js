import { FETCH_USERDATA_REQUEST, 
  FETCH_USERDATA_SUCCESS, 
  FETCH_USERDATA_FAILURE, 
  fetchUserDataFailure, 
  fetchUserDataRequest, 
  fetchUserDataSuccess } from "../../../app/store/users/userActions";
import { userData } from "./userMock";


const inputObject = userData
const error = 'Something happened'
const userId = '8105922'

it('action should request user data', () => {
  const actionOutput = {
    type: FETCH_USERDATA_REQUEST,
    payload: userId
  }
  expect(fetchUserDataRequest(userId)).toEqual(actionOutput)
});

it('action should return an object with user data', () => {
  const actionOutput = {
    type: FETCH_USERDATA_SUCCESS,
    payload: userData
  }
  expect(fetchUserDataSuccess(userData)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_USERDATA_FAILURE,
    payload: error
  }
  expect(fetchUserDataFailure(error)).toEqual(actionOutput)
});