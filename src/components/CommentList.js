import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "./RatingSystem";

const CommentList = ({ comments }) => {
  
  if (!comments) { // verifica se comments è null o undefined
    return <p>Non ci sono recensioni al momento.</p>; // restituisci un messaggio di errore o una lista vuota
  }
  return (
    
    <ListGroup className="my-4"> 
      <h4>Recensioni</h4>
      {comments.slice(-10).map((comment, id) => (
        <ListGroup.Item key={id}>
          <p className="mb-0">{comment.comment}</p>
          <small>
            Valutazione:<RatingSystem stars={comment.rate}/>
          </small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;


/* 
AVEVO UN PROBLEMA CON LO SLICE
Il problema sembra essere causato dalla variabile comments che viene passata come proprietà al componente CommentList, 
che in alcuni casi è null. Ciò può accadere quando la richiesta API per ottenere i commenti non è stata ancora completata 
o se la risposta dell'API è vuota.

comments potrebbe essere null perché potrebbe non essere ancora stato popolato con i dati ottenuti dalla chiamata API 
al momento in cui viene passato come proprietà alla componente CommentList. Ciò potrebbe verificarsi se la chiamata 
API fallisce o richiede più tempo del previsto per ottenere i dati. Pertanto, è necessario controllare se comments è 
null prima di tentare di accedere ai suoi metodi o proprietà, altrimenti verrebbe generato l'errore "Cannot read properties of null".

Per evitare questo problema, puoi aggiungere un controllo per verificare se la variabile comments è 
null o meno prima di utilizzarla. In caso contrario, puoi restituire un messaggio di errore o una lista vuota. Ad esempio:

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "./RatingSystem";

const CommentList = ({ comments }) => {
  if (!comments) { // verifica se comments è null o undefined
    return <p>Non ci sono recensioni al momento.</p>; // restituisci un messaggio di errore o una lista vuota
  }
  return (
    <ListGroup className="my-4"> 
      <h4>Recensioni</h4>
      {comments.slice(0, 10).map((comment, id) => (
        <ListGroup.Item key={id}>
          <p className="mb-0">{comment.comment}</p>
          <small>
            Valutazione:<RatingSystem stars={comment.rate}/>
          </small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;





*/
