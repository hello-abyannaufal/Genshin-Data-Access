export default {
  LoadStorageSession(variable) {
    let json = JSON.parse(sessionStorage.getItem(variable));
    return json;
  },
  SaveStorageSession(variable, value) {
    let json = JSON.stringify(value);
    return sessionStorage.setItem(variable, json);
  },
};
