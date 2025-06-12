export interface ApiCafeItem {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  tempoPreparoSegundos: number;
  categoria: string;
}

export interface ApiTamanhoXicara {
  id: string;
  descricao: string;
  ml: number;
  valorExtra: number;
}
