import { Container, Row } from 'react-bootstrap';
import "../Layout/BookCard.css"
import MyBadge from './MyBadge';
import SingleCard from './SingleCard';
import SearchBar from './SearchBar'
import React, { useEffect, useState } from 'react'
import FadeLoader from 'react-spinners/FadeLoader';

const LatestReleasePage = () => {

    const [loading, setLoading] = useState(false) // definisce uno stato loading inizializzato a false
    /* 
    La variabile di stato loading è inizializzata a false perché all'inizio 
    della pagina non c'è alcun caricamento in corso. In questo modo, 
    quando la pagina viene caricata, non viene visualizzato alcun indicatore 
    di caricamento. Tuttavia, quando viene avviato un caricamento (ad esempio quando
    viene effettuata una richiesta API per ottenere i dati dei libri), 
    il valore di loading viene impostato su true per indicare all'utente 
    che il caricamento è in corso.
    */

    const [error, setError] = useState(null) // definisce uno stato error inizializzato a null
    /* 
    La variabile di stato error viene inizializzata a null perché all'inizio non 
    ci sono errori da segnalare. In caso di errore durante la richiesta API 
    o durante l'elaborazione dei dati ricevuti, il valore di error viene 
    aggiornato con una stringa contenente un messaggio di errore specifico. 
    In questo modo, è possibile gestire gli errori in modo adeguato e informare 
    l'utente su eventuali problemi durante il caricamento dei dati.
    */

    const [books, setBooks] = useState([]) // definisce uno stato books inizializzato con un array vuoto
    //console.log(books); 
    /* 
    La variabile di stato books viene inizializzata con un array vuoto 
    perché inizialmente non ci sono libri da visualizzare. 
    Durante il caricamento dei dati, i libri vengono ottenuti 
    tramite una richiesta API e quindi vengono assegnati alla variabile di
    stato books utilizzando la funzione setBooks(). In questo modo, quando 
    i dati vengono caricati correttamente, la variabile di stato books 
    contiene un array di libri e questo può essere utilizzato per la visualizzazione.
    */

    const [renderBooks, setRenderBooks] = useState([]) // definisce uno stato renderBooks inizializzato con un array vuoto
    /*  
    La variabile di stato renderBooks viene inizializzata con un array vuoto 
    perché rappresenta l'array di libri da visualizzare nella pagina. 
    Inizialmente, questo array è vuoto poiché i dati dei libri devono ancora 
    essere caricati tramite una richiesta API. Dopo il caricamento dei dati, 
    la variabile di stato books viene aggiornata con un array di libri e 
    successivamente viene utilizzata per aggiornare anche la variabile di 
    stato renderBooks tramite la funzione setRenderBooks(). 
    In questo modo, gli utenti possono effettuare ricerche sulla pagina 
    e visualizzare solo una porzione specifica di libri, senza dover 
    effettuare ulteriori richieste API.
    */


    const getBooks = async () => { // definisce la funzione asincrona getBooks
        setLoading(true) // imposta loading a true per indicare l'inizio del caricamento
        try {
            const data = await fetch("https://epibooks.onrender.com/") // esegue una richiesta HTTP per ottenere i libri
            const response = await data.json() // converte la risposta in formato JSON
            setBooks(response) // aggiorna lo stato books con i libri ottenuti
            setRenderBooks(response) // aggiorna lo stato renderBooks con i libri ottenuti
            setLoading(false) // imposta loading a false per indicare la fine del caricamento
        } catch (error) {
            if (error) {
                setError("Errore durante ricezione dei dati"); // imposta error con un messaggio di errore in caso di fallimento della richiesta HTTP
            }
        }
    }

    useEffect(() => { // definisce l'effetto collaterale che viene eseguito quando il componente viene montato
        getBooks(); // chiama la funzione getBooks per ottenere i libri
    }, [])

    return (
        <>
            <Container className="my-5">
                {error && <h1 className='text-danger'>{error}</h1>} {/* visualizza il messaggio di errore se presente */}
                {loading && !error && <FadeLoader color="#36d7b7" />} {/* visualizza l'indicatore di caricamento se loading è true e non ci sono errori */}
                {!loading && !error && (
                    <div>
                        <h4 className="text-center mb-5">Ultimi Arrivi</h4>
                        <SearchBar books={books} setBooks={setBooks} setRenderBooks={setRenderBooks} /> {/* passa i libri e le funzioni di aggiornamento come proprietà alla componente SearchBar */}
                        <MyBadge str="MyBadge" color="secondary" />
                        <Container fluid>
                            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                                {renderBooks && renderBooks.map((book) => ( /* controllo se sesiste books (quinsi se è true) */
                                    <SingleCard
                                        key={book.asin}
                                        title={book.title}
                                        img={book.img}
                                        author={book.author}
                                        price={book.price}
                                        asin={book.asin}
                                        category={book.category}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </div>
                )}
            </Container>
        </>
    );
};

export default LatestReleasePage;



