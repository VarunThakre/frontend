/*
 *
 * RegisterPage actions
 *
 */

import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  CHANGE_FIELD,
  ENTER_LOGIN,
  REGISTER_ERROR,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  VALIDATE_FORM,
} from 'containers/RegisterPage/constants';

export function changeFieldAction(key, val) {
  return {
    type: CHANGE_FIELD,
    key,
    val,
  };
}

export function onFormValidation() {
  return {
    type: VALIDATE_FORM,
  };
}

export function asyncStart() {
  return {
    type: ASYNC_START,
  };
}

export function asyncEnd() {
  return {
    type: ASYNC_END,
  };
}

export function enterValidationErrorAction(errors) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function enterRegisterAction() {
  return {
    type: REGISTER_PROCESS,
  };
}

export function registerSuccessAction() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerErrorAction(error) {
  return {
    type: REGISTER_ERROR,
    error,
  };
}

export function isLoggedAction() {
  return {
    type: ENTER_LOGIN,
  };
}