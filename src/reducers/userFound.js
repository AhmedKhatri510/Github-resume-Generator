export default (isUserFound = true, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      const payload = action?.payload;
      if (!payload) return false;
      else return true;
    default:
      return isUserFound;
  }
};
