import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { FacaPedido } from "../pages/FacaPedido/facapedido";
import { Adicionais } from "../pages/Adicionais/adicionais";
import { TipoPagamento } from "../pages/Pagamento/tipopagamento";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<FacaPedido />} />
        <Route path="/adicionais" element={<Adicionais />} />
        <Route path="/pagamento" element={<TipoPagamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
