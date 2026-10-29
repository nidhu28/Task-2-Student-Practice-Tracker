
import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <Header />

      {showProfile && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          count={count}
        />
      )}

      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => setCount(count + 1)}>
          Complete Practice
        </button>

        {" "}

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        {" "}

        <button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
