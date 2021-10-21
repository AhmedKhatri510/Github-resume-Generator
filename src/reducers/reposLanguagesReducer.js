export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LANG":
      return [...state, [...Object.keys(action.payload)]];
    default:
      return state;
  }
};
