import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const searchUser = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub Profile Viewer</h1>

      <input
        className="user-input"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="search-btn" onClick={searchUser}>Search</button>

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
          />
          <h2>{user.name}</h2>
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;
