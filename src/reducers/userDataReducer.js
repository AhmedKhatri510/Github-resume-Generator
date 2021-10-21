export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
