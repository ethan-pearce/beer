import { useState, useEffect } from 'react'
import { mapBeer } from '../utils/mapBeer'

export const useGetBeers = (breweryId) => {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const baseUrl = `https://sandbox-api.brewerydb.com/v2/`;
    const path = breweryId ? `brewery/${breweryId}/beers` : 'beers'

    useEffect(() => {
        setLoading(true)

        fetch(`${baseUrl}${path}?key=816ecbe13a87ec829cd5aef047ca5c0a&p=1`)
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
    }, [breweryId])

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