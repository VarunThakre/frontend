/*
 *
 * UserModule actions
 *
 */

import {
  ADD_VALIDATION_ERROR,
  ASSIGN_ROLES,
  ASSIGN_USERS,
  ASYNC_END,
  ASYNC_START,
  CHANGE_FORM_FIELD,
  CLEAR_FORM,
  DELETE_ITEM_BY_ID,
  GET_USER_BY_ID,
  QUERY_ROLES,
  QUERY_USERS,
  SET_PAGE_NUMBER,
  SUBMIT_FORM,
  VALIDATE_FORM,
} from 'containers/UserModule/constants';

export function enterValidationErrorAction(errors) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function queryUsersAction() {
  return {
    type: QUERY_USERS,
  };
}

export function queryRolesListAction() {
  return {
    type: QUERY_ROLES,
  };
}

export function asyncStartAction() {
  return {
    type: ASYNC_START,
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}

export function clearFormAction() {
  return {
    type: CLEAR_FORM,
  };
}

export function getUserByIdAction() {
  return {
    type: GET_USER_BY_ID,
  };
}

export function validateFormAction() {
  return {
    type: VALIDATE_FORM,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function deleteItemByIdAction(id) {
  return {
    type: DELETE_ITEM_BY_ID,
    id,
  };
}

export function assignUsersAction(users) {
  return {
    type: ASSIGN_USERS,
    users,
  };
}

export function assignRolesListAction(roles) {
  return {
    type: ASSIGN_ROLES,
    roles,
  };
}

export function setPageNumberAction(pageNumber) {
  return {
    type: SET_PAGE_NUMBER,
    pageNumber,
  };
}

export function changeFieldAction(key, value) {
  return {
    type: CHANGE_FORM_FIELD,
    key,
    value,
  };
}
