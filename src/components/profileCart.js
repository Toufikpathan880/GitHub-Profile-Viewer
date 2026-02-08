import React from "react";
import "../App.css";

function ProfileCard({ user }) {
  return (
    <div className="Card">
      <img src={user.avatar_url} alt="avatar" width="120" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  );
}

export default ProfileCard;
