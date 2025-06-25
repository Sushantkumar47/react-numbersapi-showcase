import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./LoginForm";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;
