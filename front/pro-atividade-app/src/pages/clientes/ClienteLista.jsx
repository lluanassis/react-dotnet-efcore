import { useState } from "react";
import TitlePage from "../../components/TitlePage";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "238857",
    situacao: "Desativado",
  },
  {
    id: 2,
    nome: "Facebook",
    responsavel: "Ito",
    contato: "2000547",
    situacao: "Em Análise",
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Fabian",
    contato: "2777547",
    situacao: "Ativo",
  },
  {
    id: 4,
    nome: "IBM",
    responsavel: "Bill",
    contato: "9998647",
    situacao: "Desativado",
  },
  {
    id: 5,
    nome: "Oracle",
    responsavel: "Jack",
    contato: "2777547",
    situacao: "Ativo",
  },
];

export default function ClienteLista() {
  const history = useHistory();

  const [termoBusca, setTermoBusca] = useState("");

  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
  };

  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente)
      .join(" ")
      .toLowerCase()
      .includes(termoBusca.toLowerCase());
  });

  const novoCliente = () => {
    history.push("/cliente/detalhe");
  };

  return (
    <>
      <TitlePage title="Cliente Lista - beta">
        <Button variant="outline-secondary" onClick={novoCliente}>
          <i className="fas fa-plus me-2"></i>
          Novo Cliente
        </Button>
      </TitlePage>

      <InputGroup className="mt-3 mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Buscar:
        </InputGroup.Text>
        <Form.Control
          onChange={handleInputChange}
          placeholder="Buscar por nome do cliente"
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() =>
                      history.push(`/cliente/detalhe/${cliente.id}`)
                    }
                  >
                    <i className="fas fa-user-edit me-2"></i>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="fas fa-user-times me-2"></i>
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
