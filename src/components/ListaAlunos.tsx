import type {Aluno} from "../types";
import AlunoCard from "./AlunoCard";

interface ListaAlunosProps {
    alunos: Aluno[];
}

function ListaAlunos({ alunos }: ListaAlunosProps) {
  return (
    <section>
      {alunos.map((aluno) => (
        <AlunoCard
          key={aluno.id}
          aluno={aluno}
        />
      ))}
    </section>
  );
}
export default ListaAlunos;