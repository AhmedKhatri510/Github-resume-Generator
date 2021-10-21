import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserData, fetchRepos, fetchLanguages } from "../actions";
import Github from "../apis/Github";
import ErrorMessage from "./ErrorMessage";
import RepoCard from "./RepoCard";
import RepoCards from "./RepoCards";

const GithubPersonalInfo = (props) => {
  useEffect(() => {
    props.fetchUserData(props.match.params.userName);
    props.fetchRepos(props.match.params.userName);
  }, []);

  useEffect(() => {
    if (!props.repos.length) return;

    props.repos.forEach((repo) => {
      props.fetchLanguages(repo.languages_url);
    });
  }, [props.repos]);

  const userData = props?.userData?.userData;

  //once reload and check the user found or not.
  if (!props.isUserFound) {
    return <ErrorMessage />;
    // return <div>Oops! user not Found</div>;
  }

  //on Reloading...
  if (!userData) return <div>Loading...</div>;

  //fetching the Repositories if user is found
  console.log(props.repos);

  return (
    <div className="container">
      <div className="sidebar">
        {userData.avatar_url ? (
          <img src={userData.avatar_url} className="avatar" />
        ) : (
          ""
        )}
        <h1 className="heading">{userData.name}</h1>
        {userData.bio ? <p className="text">{userData.bio}</p> : ""}

        <div>
          <h2 className="heading--2 margin-bottom-medium">Skills</h2>
          <div className="container-skills">
            {props.reposLanguages &&
              [
                ...new Set(
                  props.reposLanguages.flatMap((repoLang) => repoLang)
                ),
              ].map((language) => {
                return <p className="white-block">{language}</p>;
              })}
          </div>
        </div>
        <div className="connections">
          <p className="text">
            <span>{userData.followers}</span> followers
          </p>
          <p className="text">
            <span>{userData.following}</span> following
          </p>
        </div>
        <div className="detail">
          {userData.url ? (
            <a href={userData.html_url} target="_blank" className="link text">
              <i className="fab fa-github-alt icon" />
              {`@${userData.login}`}
            </a>
          ) : (
            ""
          )}
          {userData.location ? (
            <div>
              <i className="fas fa-map-marker-alt icon" />
              {userData.location}
            </div>
          ) : (
            ""
          )}
          {userData.company && (
            <div>
              <i className="fas fa-building icon" />
              {userData.company}
            </div>
          )}
          {userData.blog && (
            <div>
              <i className="fas fa-link icon" />
              <a
                href={userData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="link text"
              >
                {userData.blog}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        <h1 className="heading white">Repositories</h1>
        <div className="container-repos">
          <RepoCards />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    isUserFound: state.isUserFound,
    repos: state.repos,
    reposLanguages: state.reposLanguages,
  };
};

export default connect(mapStateToProps, {
  fetchUserData,
  fetchRepos,
  fetchLanguages,
})(GithubPersonalInfo);
