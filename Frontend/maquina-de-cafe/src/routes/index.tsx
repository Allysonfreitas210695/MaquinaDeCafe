import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
