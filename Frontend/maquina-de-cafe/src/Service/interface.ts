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
