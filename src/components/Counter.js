/* 
import React, {useState} from 'react'
//cambiamento di stato */
//useState restituisce sempre 2 cose: lo stato attuale, la funzione per cambiare questo stato */    const [counter, setCounter] = useState(0) inizializzato come primitivo, in questo caso number 

/* const Counter = () => { 

    const [formState, setFormState] = useState({})//oggetto vuoto
    console.log(formState);
            
    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const reset = () => {
        setCounter(0);
    }

  return (
    <div>

        <h1>Il conteggio è: {counter}</h1>
        <br></br>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={reset}>Resetta</button>

        <form>
            
            <input 
                type="text" 
                name="firstName"
                onChange={(event) => setFormState({
                    ...formState,
                    firstName: event.target.value,
                }) }
            />

            <input 
                type="text" 
                name="lastName"
                onChange={(event) => setFormState({
                    ...formState,
                    lastName: event.target.value,
                })}
            />

            <button type="submit">Invia</button>
        </form>

    </div>
  )
}

export default Counter 
*/