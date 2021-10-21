import React, { useEffect } from "react";
import RepoCard from "./RepoCard";

import { connect } from "react-redux";

const RepoCards = (props) => {
  const renderRepoCard = () => {
    return props.repos.map((repo, index) => {
      return (
        <RepoCard
          languages={props.reposLanguages[index]}
          name={repo.name}
          description={repo.description && repo.description}
          repoUrl={repo.html_url}
        />
      );
    });
  };

  return <>{props.repos.length ? renderRepoCard() : ""}</>;
};

const mapStateToProps = (state) => {
  return { reposLanguages: state.reposLanguages, repos: state.repos };
};

export default connect(mapStateToProps)(RepoCards);
