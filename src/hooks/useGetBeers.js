import { useState, useEffect } from 'react'

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
        const { nameDisplay, id, labels, style } = beer;
        const image = labels?.medium ? labels?.medium : 'https://res.cloudinary.com/teepublic/image/private/s--TsohP-Cw--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1513360267/production/designs/2182073_1.jpg'

        return {
            name: nameDisplay,
            image,
            id,
            style: style?.shortName
        }
    })

    return mappedBeers;
}