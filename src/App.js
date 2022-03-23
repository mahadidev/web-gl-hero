// import modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import { HomePage } from "./Page/HomePage";

// import stylesheet
import "./index.css";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
