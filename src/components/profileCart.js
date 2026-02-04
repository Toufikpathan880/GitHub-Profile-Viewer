import React from 'react'

export default function ProfileCart({ user }) {
  return (
      <div style={{ marginTop: "20px" }}>
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
