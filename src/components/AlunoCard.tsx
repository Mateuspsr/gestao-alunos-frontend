import type {Aluno} from "../types";
interface AlunoCardProps {
    aluno: Aluno;
}

function AlunoCard({aluno}: AlunoCardProps) {
    return (
        <article>
            <h2>{aluno.nome}</h2>
            <p>{aluno.matricula}</p>
            <p>{aluno.idade} anos</p>
            <p>{aluno.media}</p>
            <p>
                {aluno.media >= 6 ? "Aprovado" : "Reprovado"}
            </p>
        </article>
    );
}

export default AlunoCard;