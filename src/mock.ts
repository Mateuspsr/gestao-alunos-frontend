import type {
  Aluno,
  Disciplina,
  MatriculaDisciplina,
} from "./types";

export const alunosIniciais: Aluno[] = [
  {
    id: 1,
    nome: "Ana Souza",
    idade: 20,
    matricula: "2026001",
    media: 8.5,
  },
  {
    id: 2,
    nome: "Bruno Lima",
    idade: 17,
    matricula: "2026002",
    media: 5.4,
  },
  {
    id: 3,
    nome: "Carla Mendes",
    idade: 22,
    matricula: "2026003",
    media: 7.2,
  },
  {
    id: 4,
    nome: "Daniel Rocha",
    idade: 16,
    matricula: "2026004",
    media: 9.1,
  },
  {
    id: 5,
    nome: "Fernanda Alves",
    idade: 19,
    matricula: "2026005",
    media: 4.8,
  },
  {
    id: 6,
    nome: "Gabriel Santos",
    idade: 21,
    matricula: "2026006",
    media: 6.3,
  },
  {
    id: 7,
    nome: "Helena Martins",
    idade: 18,
    matricula: "2026007",
    media: 9.6,
  },
  {
    id: 8,
    nome: "Igor Carvalho",
    idade: 17,
    matricula: "2026008",
    media: 6.8,
  },
  {
    id: 9,
    nome: "Juliana Ferreira",
    idade: 19,
    matricula: "2026009",
    media: 7.9,
  },
  {
    id: 10,
    nome: "Kauã Ribeiro",
    idade: 16,
    matricula: "2026010",
    media: 5.7,
  },
  {
    id: 11,
    nome: "Larissa Costa",
    idade: 18,
    matricula: "2026011",
    media: 8.8,
  },
  {
    id: 12,
    nome: "Lucas Almeida",
    idade: 20,
    matricula: "2026012",
    media: 6.1,
  },
  {
    id: 13,
    nome: "Mariana Oliveira",
    idade: 17,
    matricula: "2026013",
    media: 9.3,
  },
  {
    id: 14,
    nome: "Nicolas Barros",
    idade: 19,
    matricula: "2026014",
    media: 4.3,
  },
  {
    id: 15,
    nome: "Olívia Nascimento",
    idade: 18,
    matricula: "2026015",
    media: 7.5,
  },
  {
    id: 16,
    nome: "Pedro Henrique",
    idade: 21,
    matricula: "2026016",
    media: 8.1,
  },
  {
    id: 17,
    nome: "Rafaela Gomes",
    idade: 16,
    matricula: "2026017",
    media: 5.2,
  },
  {
    id: 18,
    nome: "Samuel Cardoso",
    idade: 18,
    matricula: "2026018",
    media: 6.9,
  },
  {
    id: 19,
    nome: "Sofia Monteiro",
    idade: 17,
    matricula: "2026019",
    media: 9.8,
  },
  {
    id: 20,
    nome: "Thiago Moreira",
    idade: 20,
    matricula: "2026020",
    media: 7.1,
  },
  {
    id: 21,
    nome: "Valentina Freitas",
    idade: 16,
    matricula: "2026021",
    media: 8.4,
  },
  {
    id: 22,
    nome: "Vinícius Lopes",
    idade: 19,
    matricula: "2026022",
    media: 5.9,
  },
  {
    id: 23,
    nome: "Yasmin Araújo",
    idade: 18,
    matricula: "2026023",
    media: 7.7,
  },
  {
    id: 24,
    nome: "Arthur Teixeira",
    idade: 17,
    matricula: "2026024",
    media: 6.5,
  },
  {
    id: 25,
    nome: "Beatriz Melo",
    idade: 20,
    matricula: "2026025",
    media: 9.0,
  },
  {
    id: 26,
    nome: "Caio Batista",
    idade: 18,
    matricula: "2026026",
    media: 3.9,
  },
  {
    id: 27,
    nome: "Eduarda Campos",
    idade: 16,
    matricula: "2026027",
    media: 8.2,
  },
  {
    id: 28,
    nome: "Felipe Moura",
    idade: 21,
    matricula: "2026028",
    media: 6.0,
  },
  {
    id: 29,
    nome: "Isabela Duarte",
    idade: 17,
    matricula: "2026029",
    media: 9.4,
  },
  {
    id: 30,
    nome: "João Vitor Silva",
    idade: 19,
    matricula: "2026030",
    media: 5.1,
  },
];

export const disciplinasIniciais: Disciplina[] = [
  {
    id: 1,
    nome: "Matemática",
    carga_horaria: 80,
  },
  {
    id: 2,
    nome: "Gramática",
    carga_horaria: 60,
  },
  {
    id: 3,
    nome: "História",
    carga_horaria: 60,
  },
  {
    id: 4,
    nome: "Geografia",
    carga_horaria: 60,
  },
  {
    id: 5,
    nome: "Ciências",
    carga_horaria: 80,
  },
  {
    id: 6,
    nome: "Inglês",
    carga_horaria: 60,
  },
  {
    id: 7,
    nome: "Redação",
    carga_horaria: 40,
  },
  {
    id: 8,
    nome: "Educação Física",
    carga_horaria: 40,
  },
];

const ajustePorDisciplina: Record<number, number> = {
  1: 0.3,   // Matemática
  2: -2.2,  // Gramática - menor desempenho
  3: 0.6,   // História
  4: 0.4,   // Geografia
  5: 0.2,   // Ciências
  6: 0.7,   // Inglês
  7: 0.1,   // Redação
  8: 1.0,   // Educação Física
};

export const matriculasIniciais: MatriculaDisciplina[] =
  alunosIniciais.flatMap((aluno) =>
    disciplinasIniciais.flatMap((disciplina) => {
      const naoMatriculado =
        (aluno.id + disciplina.id) % 9 === 0;

      if (naoMatriculado) {
        return [];
      }

      const variacao =
        ((aluno.id * disciplina.id) % 5 - 2) * 0.4;

      const ajuste =
        ajustePorDisciplina[disciplina.id] ?? 0;

      let nota = Math.max(
        0,
        Math.min(
          10,
          Number(
            (
              aluno.media +
              variacao +
              ajuste
            ).toFixed(1)
          )
        )
      );

      /*
       * Gramática recebe uma dificuldade adicional.
       * Isso garante que ela tenha, em geral,
       * as menores notas da escola.
       */
      if (disciplina.nome === "Gramática") {
        nota = Math.max(
          2.5,
          Math.min(
            8.2,
            nota
          )
        );
      }

      /*
       * Mateus continua sendo o aluno
       * de maior desempenho.
       */
      if (
        aluno.matricula === "1111111111"
      ) {
        if (
          disciplina.nome === "Gramática"
        ) {
          nota = 9.4;
        } else {
          nota = Math.min(
            10,
            9.7 +
              ((disciplina.id % 3) * 0.1)
          );
        }
      }

      return [
        {
          id:
            aluno.id * 100 +
            disciplina.id,

          aluno_id: aluno.id,

          disciplina_id:
            disciplina.id,

          nota:
            Number(
              nota.toFixed(1)
            ),
        },
      ];
    })
  );