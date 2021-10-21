import React from "react";

const RepoCard = ({ languages, name, description, repoUrl }) => {
  return (
    <>
      <a className="card link" href={repoUrl} target="_blank">
        <div className="repo-name">{name}</div>
        <div className="repo-description">{description && description}</div>
        <div className="container-skills repo-languages">
          {languages &&
            languages.map((lang) => {
              return <p className="white-block repo-white-block">{lang}</p>;
            })}
        </div>
      </a>
    </>
  );
};

export default RepoCard;
