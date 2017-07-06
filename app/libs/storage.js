export default {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    }
    catch(error) {
      console.error(error);
      return null;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
