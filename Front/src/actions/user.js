export const LOGMODALE = 'LOGMODALE';
export const UPDATE_FIELD = 'UPDATE_FIELD';


export const logModale = () => ({
  type: LOGMODALE,



});


export const setUpdateField = (name,value) => ({
  type: UPDATE_FIELD,
  name: name,
  value: value,
});
