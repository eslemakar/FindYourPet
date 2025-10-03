import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import DetailPage from "./components/Detail-page";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/pets/:id" element={<DetailPage />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
