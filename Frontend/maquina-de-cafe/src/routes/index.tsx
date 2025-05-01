import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { FacaPedido } from "../pages/FacaPedido/facapedido";
import { Detalhes } from "../pages/Detalhes/detalhes";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<FacaPedido />} />
        <Route path="/detalhe" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
