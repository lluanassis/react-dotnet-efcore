import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Atividade from "./Atividade";

export default function AtividadeLista(props) {
  return (
    <div className="mt-3">
      <ListGroup>
        {props.atividades.map((ativ) => (
          <Atividade
            key={ativ.id}
            ativ={ativ}
            deletarAtividade={props.deletarAtividade}
            pegarAtividade={props.pegarAtividade}
          />
        ))}
      </ListGroup>
    </div>
  );
}
