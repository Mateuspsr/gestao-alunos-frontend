import type { Aluno } from "../types";

interface AlunoCardProps {
  aluno: Aluno;
}

function AlunoCard({ aluno }: AlunoCardProps) {
  return (
    <article className="aluno-card">
      <h2>{aluno.nome}</h2>

      <p>Matrícula: {aluno.matricula}</p>
      <p>Idade: {aluno.idade} anos</p>
      <p>Média: {aluno.media}</p>

      <p className={aluno.media >= 6 ? "status aprovado" : "status reprovado"}>
        {aluno.media >= 6 ? "Aprovado" : "Reprovado"}
      </p>
    </article>
  );
}

export default AlunoCard;