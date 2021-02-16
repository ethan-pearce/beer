import { createContext } from 'react'

const BeerContext = createContext({beer: {}, setBeer: undefined})

export const BeerProvider = BeerContext.Provider
export const BeerConsumer = BeerContext.Consumer

export default BeerContext