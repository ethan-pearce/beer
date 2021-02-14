import { useState, useEffect } from 'react'
import { mapBeer } from '../utils/mapBeer'

export const useGetBeers = () => {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch('https://sandbox-api.brewerydb.com/v2/beers?key=816ecbe13a87ec829cd5aef047ca5c0a')
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                }
                return res.json()
            })
            .then((json) => {
                setBeers(mapBeers(json.data))
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [])

    return {
        beers,
        loading,
        error,
    }
}

const mapBeers = (beers) => {
    const mappedBeers = beers.map(beer => {
        return mapBeer(beer);
    })

    return mappedBeers;
}