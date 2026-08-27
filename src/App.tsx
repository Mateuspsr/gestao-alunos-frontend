import Cabecalho from "./components/Cabecalho";
import ListaAlunos from "./components/ListaAlunos";
import type {Aluno} from "./types";

const alunoteste: Aluno = {
  id: 1,
  nome: "Yan Piauí",
  idade: 18,
  matricula: "2026007",
  media: 0.0,
};

const alunoTeste2: Aluno = {
  id: 2,
  nome: "Outro Nome",
  idade: 20,
  matricula: "2026008",
  media: 8,
};

const alunosTeste: Aluno[] = [
  alunoteste,
  alunoTeste2,
];

function App() {
  return(
    <div>
      <Cabecalho />
      <ListaAlunos alunos={alunosTeste}/>
    </div>
  )
}


export default App;
