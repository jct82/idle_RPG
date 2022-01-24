export const LOGMODALE = "LOGMODALE";
export const UPDATE_FIELD = "UPDATE_FIELD";
export const setModale = (modal) => ({
  type: LOGMODALE,
  modal: modal,
});



export const setUpdateField = (name, value) => ({
  type: UPDATE_FIELD,
  name: name,
  value: value,
});
