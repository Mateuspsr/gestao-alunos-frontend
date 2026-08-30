import type {
  Aluno,
  AlunoEntrada,
  Disciplina,
  DisciplinaDoAluno,
  FiltrosAluno,
  MatriculaDisciplina,
} from "./types";

import {
  alunosIniciais,
  disciplinasIniciais,
  matriculasIniciais,
} from "./mock";

let banco: Aluno[] = [
  ...alunosIniciais,
];

let bancoDisciplinas: Disciplina[] = [
  ...disciplinasIniciais,
];

let bancoMatriculas: MatriculaDisciplina[] = [
  ...matriculasIniciais,
];

export function esperar(
  ms: number
): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function listarAlunos(
  filtros?: FiltrosAluno
): Promise<Aluno[]> {
  await esperar(300);

  let resultado = [...banco];

  if (filtros?.q) {
    const busca =
      filtros.q.toLowerCase();

    resultado =
      resultado.filter(
        (aluno) =>
          aluno.nome
            .toLowerCase()
            .includes(busca) ||
          aluno.matricula
            .toLowerCase()
            .includes(busca)
      );
  }

  if (
    filtros?.idade_minima !==
    undefined
  ) {
    resultado =
      resultado.filter(
        (aluno) =>
          aluno.idade >=
          filtros.idade_minima!
      );
  }

  if (
    filtros?.media_minima !==
    undefined
  ) {
    resultado =
      resultado.filter(
        (aluno) =>
          aluno.media >=
          filtros.media_minima!
      );
  }

  return resultado;
}

export async function criarAluno(
  dados: AlunoEntrada
): Promise<Aluno> {
  await esperar(300);

  const matriculaDuplicada =
    banco.some(
      (aluno) =>
        aluno.matricula ===
        dados.matricula
    );

  if (matriculaDuplicada) {
    throw new Error(
      "Já existe um aluno com essa matrícula."
    );
  }

  const novoId =
    Math.max(
      0,
      ...banco.map(
        (aluno) =>
          aluno.id
      )
    ) + 1;

  const novoAluno: Aluno = {
    id: novoId,
    ...dados,
  };

  banco = [
    ...banco,
    novoAluno,
  ];

  return novoAluno;
}

export async function atualizarAluno(
  id: number,
  dados: AlunoEntrada
): Promise<Aluno> {
  await esperar(300);

  const alunoExistente =
    banco.find(
      (aluno) =>
        aluno.id === id
    );

  if (!alunoExistente) {
    throw new Error(
      "Aluno não encontrado."
    );
  }

  const matriculaDuplicada =
    banco.some(
      (aluno) =>
        aluno.id !== id &&
        aluno.matricula ===
          dados.matricula
    );

  if (matriculaDuplicada) {
    throw new Error(
      "Já existe outro aluno com essa matrícula."
    );
  }

  const alunoAtualizado: Aluno = {
    id,
    ...dados,
  };

  banco =
    banco.map(
      (aluno) =>
        aluno.id === id
          ? alunoAtualizado
          : aluno
    );

  return alunoAtualizado;
}

export async function excluirAluno(
  id: number
): Promise<void> {
  await esperar(300);

  const existe =
    banco.some(
      (aluno) =>
        aluno.id === id
    );

  if (!existe) {
    throw new Error(
      "Aluno não encontrado."
    );
  }

  banco =
    banco.filter(
      (aluno) =>
        aluno.id !== id
    );

  bancoMatriculas =
    bancoMatriculas.filter(
      (matricula) =>
        matricula.aluno_id !==
        id
    );
}

export async function listarDisciplinas():
Promise<Disciplina[]> {
  await esperar(300);

  return [
    ...bancoDisciplinas,
  ];
}

export async function listarMatriculas():
Promise<MatriculaDisciplina[]> {
  await esperar(300);

  return [
    ...bancoMatriculas,
  ];
}

export async function listarDisciplinasDoAluno(
  alunoId: number
): Promise<DisciplinaDoAluno[]> {
  await esperar(300);

  const vinculos =
    bancoMatriculas.filter(
      (matricula) =>
        matricula.aluno_id ===
        alunoId
    );

  return vinculos
    .map((vinculo) => {
      const disciplina =
        bancoDisciplinas.find(
          (disciplina) =>
            disciplina.id ===
            vinculo.disciplina_id
        );

      if (!disciplina) {
        return null;
      }

      return {
        ...disciplina,
        nota:
          vinculo.nota,
      };
    })
    .filter(
      (
        disciplina
      ): disciplina is DisciplinaDoAluno =>
        disciplina !== null
    );
}