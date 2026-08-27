import { useEffect, useState } from "react";

import Cabecalho from "./components/Cabecalho";
import ListaAlunos from "./components/ListaAlunos";

import { listarAlunos } from "./api";
import type { Aluno } from "./types";

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarAlunos() {
      try {
        setCarregando(true);
        setErro(null);

        const dados = await listarAlunos();

        setAlunos(dados);
      } catch (erro) {
        if (erro instanceof Error) {
          setErro(erro.message);
        } else {
          setErro("Erro ao carregar os alunos.");
        }
      } finally {
        setCarregando(false);
      }
    }

    carregarAlunos();
  }, []);

  return (
    <div className="app">
      <Cabecalho />

      <main>
        {carregando ? (
          <p>Carregando...</p>
        ) : erro ? (
          <p>Erro: {erro}</p>
        ) : alunos.length === 0 ? (
          <p>Nenhum aluno encontrado.</p>
        ) : (
          <ListaAlunos alunos={alunos} />
        )}
      </main>
    </div>
  );
}

export default App;
