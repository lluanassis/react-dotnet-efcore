import React from "react";
import { Card, Badge } from "react-bootstrap";

export default function Atividade(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "Baixa":
      case "Normal":
      case "Alta":
        return param;
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case "Baixa":
        return icone ? "smile" : "success";
      case "Normal":
        return icone ? "meh" : "dark";
      case "Alta":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  return (
    <Card
      key={props.ativ.id}
      className={
        "card mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)
      }
    >
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>
            <Badge bg="secondary" className="me-2">
              {props.ativ.id}
            </Badge>
            - {props.ativ.titulo}
          </Card.Title>
          <h6>
            Prioridade:
            <span
              className={"ms-1 text-" + prioridadeStyle(props.ativ.prioridade)}
            >
              <i
                className={
                  "me-1 far fa-" + prioridadeStyle(props.ativ.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <Card.Text>{props.ativ.descricao}</Card.Text>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.pegarAtividade(props.ativ.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.handleConfirmModal(props.ativ.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
