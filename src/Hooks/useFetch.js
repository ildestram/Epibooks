/* qui creiamo una funzione che include gli stati che ci servono (loading, error, data) e che contenga useEffect  */

import { useState, useEffect } from "react";

const useFetch = (endpoint) => { /* passiamo sempre endpoint */
    
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    const handleFetch = async () => {
        try {
            const data = await fetch(endpoint, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODE5ODU0NzYsImV4cCI6MTY4MzE5NTA3Nn0.Gttho8wvB4OesOgWIBAbV-JJFdr7a1tHDk5_ECl3e9U"
                },
            })
            const response = await data.json()
            setData(response)
            setLoading(false)
        } catch (error) {
            if(error) setError('Erorre generico server')
        }
    }

    useEffect(()=>{
        handleFetch()
    }, [endpoint])

    return {
        data, loading, error
    }
}   

export default useFetch
