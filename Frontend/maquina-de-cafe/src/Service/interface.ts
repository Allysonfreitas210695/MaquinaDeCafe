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
  selectedCupMl: number | undefined;
  selectedCupDescription: string | undefined;
  preparation: number;
  selectedCupValue: number | undefined;
}
