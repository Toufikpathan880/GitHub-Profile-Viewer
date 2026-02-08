import { useState } from "react";
import ProfileCard from "./components/profileCart";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = () => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        setError("User not found");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub Profile Viewer</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success */}
      {user && <ProfileCard user={user} />}
    </div>
  );
}

export default App;
