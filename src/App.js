import { useState } from "react";
import "./App.css";
import ProfileCart from "./components/profileCart";

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

      {user && <ProfileCart user={user} />}
    </div>
  );
}

export default App;
