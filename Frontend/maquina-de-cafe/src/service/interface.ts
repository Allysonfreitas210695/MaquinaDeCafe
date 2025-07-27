import { CartItem } from "../pages/Carrinho/CardContext/cardcontext";

export interface ApiCafeItem {
  id: string;
  nome: string;
  descricao: string;
  tempoPreparoSegundos: number;
  categoria: string;
  tamanhosXicara: ApiTamanhoXicara[];
}

export interface ApiTamanhoXicara {
  id: string;
  descricao: string;
  ml: number;
  valor: number;
}

export interface ApiIngredienteadicional {
  id: string;
  nome: string;
  valorExtra: number;
}

export interface ItemCarrinho {
  cafe: CoffeeCustomizationData;
  adicionaisSelecionados: SelectedAdicional[];
  quantidade: number;
  precoItemTotal: number;

  // Campos extras para mapeamento direto no CardPagamento
  nome: string;
  ml: string;
  com: string;
  valor: string;
  quant: string;
  imagem: string;
}

export interface Ingredienteadicional {
  id: string;
  nome: string;
  valorExtra: number;
}

export interface SelectedAdicional extends Ingredienteadicional {
  quantidade: number;
}

export interface CoffeeCustomizationData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  // selectedCupDescription: string | undefined;
  preparation: number;
  // selectedCupValue: number | undefined;
  tag?: string; //
  tamanhoSelecionado: ITamanhoXicaraProps;
  tamanhosXicara?: ITamanhoXicaraProps[];
  tipoAcucar?: string;
  tipoLeite?: string;
}

export interface CardPagamentoProps {
  pedidos: CartItem[];
  subtotal: number;
  taxaServico: number;
  total: number;
  checkoutPath?: string;
}

export interface ITamanhoXicaraProps {
  id: string;
  descricao: string;
  ml: number;
  valor: number;
}

export interface Adicional {
  id: string;
  nome: string;
  valorExtra: number;
}

export interface AvaliacaoCafePayload {
  cafeId: string;
  atendimento: string;
  estrelas: number;
  observacao: string;
}

export interface PedidoItem {
  cafeId: string;
  quantidade: number;
  tamanhoXicaraId: string;
  ingredientesAdicionaisIds: string[];
  observacao: string;
  tipoLeite: string; 
  tipoAcucar: string; 
}


export interface Pedidos {
  id: string; 
  valorTotal: number;
  formapagamento: string;
  pedidosItens: PedidoItem[]; 
 
}

export interface PedidoItemRequest {
  cafeId: string; // GUID do café
  quantidade: number;
  tamanhoXicaraId: string; // GUID do tamanho da xícara
  ingredientesAdicionaisIds: string[]; // Apenas GUIDs
  tipoLeite: string;
  tipoAcucar: string;
}

export interface CriarPedidoRequest {
  formaPagamento: string;
  valorTotal: number;
  pedidosItens: PedidoItemRequest[];
}