export interface Aluno {
  id: number;
  nome: string;
  idade: number;
  matricula: string;
  media: number;
}

export interface AlunoEntrada {
  nome: string;
  idade: number;
  matricula: string;
  media: number;
}

export interface Disciplina {
  id: number;
  nome: string;
  carga_horaria: number;
}

export interface FiltrosAluno {
  q?: string;
  idade_minima?: number;
  media_minima?: number;
}

export interface MatriculaDisciplina {
  id: number;
  aluno_id: number;
  disciplina_id: number;
  nota: number;
}

export interface DisciplinaDoAluno extends Disciplina {
  nota: number;
}