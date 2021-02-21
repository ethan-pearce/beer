import { useState, useEffect } from 'react'
import { mapBeer } from '../utils/mapBeer'

export const useGetBeers = (breweryId, pageNumber = 1) => {
    const [beers, setBeers] = useState([])
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const baseUrl = `https://sandbox-api.brewerydb.com/v2/`;
    const path = breweryId ? `brewery/${breweryId}/beers` : 'beers'

    useEffect(() => {
        setLoading(true)

        fetch(`${baseUrl}${path}?key=816ecbe13a87ec829cd5aef047ca5c0a&p=${pageNumber}`)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                }
                return res.json()
            })
            .then((json) => {
                setBeers(mapBeers(json.data))
                setInfo({
                    totalResults: json.totalResults,
                    numberOfPages: json.numberOfPages,
                    currentPage: json.currentPage
                })
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [breweryId, pageNumber])

    return {
        beers,
        info,
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