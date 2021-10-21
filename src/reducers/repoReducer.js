export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_REPO":
      return action.payload.data;
    default:
      return state;
  }
};
