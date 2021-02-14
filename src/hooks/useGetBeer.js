import { useState, useEffect } from 'react'
import { mapBeer } from '../Utils/mapBeer'

export const useGetBeer = (beerId) => {
    const [beer, setBeer] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`https://sandbox-api.brewerydb.com/v2/beer/${beerId}?withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&key=816ecbe13a87ec829cd5aef047ca5c0a`)
            .then((res) => {
                if (!res.ok) {
                    setError(true)
                }
                return res.json()
            })
            .then((json) => {
                setBeer(mapBeerWithExtras(json.data))
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [beerId])

    return {
        beer,
        loading,
        error,
    }
}

const mapBeerWithExtras = (beer) => {
    return {
        ...mapBeer(beer),
        breweries: mapBreweries(beer.breweries)
    }
}

const mapBreweries = (breweries) => {
    const brews = breweries.map(brewery => {
        const { id, name, website, images, locations } = brewery;

        return {
            name,
            id,
            href: website,
            image: images.medium,
            locations: locations ? mapBreweryLocations(locations) : []
        }
    })

    return brews;
}

const mapBreweryLocations = (locations) => {
    const locat = locations.map(location => {
        const { id, name, locationTypeDisplay, region, postalCode } = location;

        return {
            name,
            id,
            type: locationTypeDisplay,
            region,
            postalCode
        }
    })

    return locat;
}