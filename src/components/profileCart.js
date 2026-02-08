import React from 'react'
import "../App.css";

export default function ProfileCart({ user }) {
  return (
      <div className='Cart' >
      <img
        src={user.avatar_url}
        alt="avatar"
        width="120"
      />
      <h2>{user.name}</h2>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  )
}
