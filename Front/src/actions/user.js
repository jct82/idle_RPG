export const LOGMODALE = "LOGMODALE";
export const UPDATE_FIELD = "UPDATE_FIELD";
export const SUBSCRIBE_USER = "SUBSCRIBE_USER";
export const LOG_USER = "LOG_USER";
export const LOGIN_USER = "LOGIN_USER";


export const setModale = (modal) => ({
  type: LOGMODALE,
  modal: modal,
});

export const setUpdateField = (name, value) => ({
  type: UPDATE_FIELD,
  name: name,
  value: value,
});

export const subscribeUser = () => ({
  type: SUBSCRIBE_USER,
});

export const logUser = (token, userData) => ({
  type: LOG_USER,
  token,
  userData,
})

export const connectUser = () => ({
  type: LOGIN_USER,
})

