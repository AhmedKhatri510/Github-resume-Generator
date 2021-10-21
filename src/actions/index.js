import Github from "../apis/Github";
import history from "../history";

export const fetchUserData = (userName) => async (dispatch) => {
  try {
    const response = await Github.get(`/${userName}`);
    dispatch({ type: "FETCH_USER_DATA", payload: response.data });
    history.push(`/githubpersonalinfo/${userName}`);
  } catch (err) {
    dispatch({ type: "FETCH_USER_DATA" });
    history.push(`/githubpersonalinfo/${userName}`);
  }
};

export const fetchRepos = (userName) => async (dispatch) => {
  const response = await Github.get(`/${userName}/repos`);
  dispatch({ type: "FETCH_REPO", payload: response });
};

export const fetchLanguages = (url) => async (dispatch) => {
  const response = await Github.get(url);
  dispatch({ type: "FETCH_LANG", payload: response.data });
};
