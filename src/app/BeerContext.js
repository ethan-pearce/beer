import { createContext } from 'react'

const BeerContext = createContext({beer: {}, setBeer: () => {}})

export const BeerProvider = BeerContext.Provider
export const BeerConsumer = BeerContext.Consumer

export default BeerContext