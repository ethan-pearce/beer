import React from 'react'
import { render } from '@testing-library/react';
import BeerList from '../BeerList'
import { useGetBeers } from '../../../hooks/useGetBeers'

jest.mock('../../../hooks/useGetBeers', () => ({
    useGetBeers: jest.fn(),
}))

describe('BeerList Component', () => {
    it('should render loading', () => {
        useGetBeers.mockImplementation(() => { return { beers: [], loading: true, error: false }})
        const { container } = render(<BeerList />)
        expect(container).toMatchSnapshot()
    })

    it('should render with error', () => {
        useGetBeers.mockImplementation(() => { return { beers: [], loading: false, error: true }})
        const { container } = render(<BeerList />)
        expect(container).toMatchSnapshot()
    })
})