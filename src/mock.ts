import type { Aluno, Disciplina } from "./types";

export const alunosIniciais: Aluno[] = [
  {
    id: 1,
    nome: "Mateus Pinheiro",
    idade: 17,
    matricula: "2026001",
    media: 10.0,
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
];

export const disciplinasIniciais: Disciplina[] = [
  {
    id: 1,
    nome: "Matemática",
    carga_horaria: 60,
  },
  {
    id: 2,
    nome: "Programação",
    carga_horaria: 80,
  },
  {
    id: 3,
    nome: "Banco de Dados",
    carga_horaria: 60,
  },
  {
    id: 4,
    nome: "Redes de Computadores",
    carga_horaria: 40,
  },
];