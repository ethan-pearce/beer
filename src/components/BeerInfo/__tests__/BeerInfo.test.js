import React from 'react'
import { render } from '@testing-library/react';
import BeerInfo from '../BeerInfo'
import { useParams } from "react-router-dom";
import { useGetBeer } from '../../../hooks/useGetBeer'

jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}))

jest.mock('../../../hooks/useGetBeer', () => ({
    useGetBeer: jest.fn(),
}))

describe('BeerInfo Component', () => {
    it('should render when loading', () => {
        useParams.mockImplementation(() => { return { beerId: '43e33e2'}})
        useGetBeer.mockImplementation(() => { return { beer: {}, loading: true, error: false }})
        const { container } = render(<BeerInfo />)
        expect(container).toMatchSnapshot()
    })

    it('should render with error', () => {
        useParams.mockImplementation(() => { return { beerId: '43e33e2'}})
        useGetBeer.mockImplementation(() => { return { beer: {}, loading: false, error: true }})
        const { container } = render(<BeerInfo />)
        expect(container).toMatchSnapshot()
    })
})