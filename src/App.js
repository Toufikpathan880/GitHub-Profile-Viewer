import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    alert(`Username entered: ${username}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        GitHub Profile Viewer
      </h1>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border px-4 py-2 rounded w-64"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
