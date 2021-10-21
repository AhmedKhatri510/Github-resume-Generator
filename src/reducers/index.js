import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import isUserFound from "./userFound";
import repoReducer from "./repoReducer";
import reposLanguagesReducer from "./reposLanguagesReducer";

export default combineReducers({
  userData: userDataReducer,
  isUserFound: isUserFound,
  repos: repoReducer,
  reposLanguages: reposLanguagesReducer,
});
