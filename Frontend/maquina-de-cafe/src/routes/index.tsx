import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { FacaPedido } from "../pages/FacaPedido/facapedido";
import { Adicionais } from "../pages/Adicionais/adicionais";
import { TipoPagamento } from "../pages/Pagamento/tipopagamento";
import { Carrinho } from "../pages/Carrinho/carrinho";
import { PedidoFinalizado } from "../pages/PedidoFinalizado/pedidofinalizado";
import { Feedback } from "../pages/Feedback/feedback";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<FacaPedido />} />
        <Route path="/adicionais" element={<Adicionais />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<TipoPagamento />} />
        <Route path="/pedidofinalizado" element={<PedidoFinalizado />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
