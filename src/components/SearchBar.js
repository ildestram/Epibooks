import React, { useState } from "react"; // importazione delle librerie React e useState
import { Button, Col, Container, Form, Row } from "react-bootstrap"; // importazione delle componenti Bootstrap necessarie

//Definizione della funzione SearchBar
//Il componente accetta come argomenti un array di libri e una funzione 
//per aggiornare la lista dei libri visualizzati
const SearchBar = ({ books, setRenderBooks }) => { /* Search bar è figlio di LatestRelease, quindi eredita getbooks dal padre */

  //Dichiarazione della variabile di stato searchTerm inizializzata a una stringa vuota
  //Questa variabile conterrà il valore attuale della ricerca
  const [searchTerm, setSearchTerm] = useState("");
  //console.log(searchTerm); 

  // Definizione della funzione che viene eseguita al clic del bottone "Cerca"
  const handleSearch = () => {

    //Si filtra l'array dei libri in base al valore di searchTerm (in minuscolo)
    if (searchTerm !== "") {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      //Si aggiornano i libri visualizzati sulla pagina
      setRenderBooks(filteredBooks);
    } else {
      setRenderBooks(books);
    }

  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              onChange={(e) => [
                setSearchTerm(e.target.value),
                handleSearch()
              ]}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit">Cerca</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar; 

