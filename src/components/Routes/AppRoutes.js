import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "../../pages/HomePage";
// import RegisterPage from "../../pages/register";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/register";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
