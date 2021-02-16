import React from 'react'
import { render } from '@testing-library/react';
import BeerList from '../BeerList'
import { useGetBeers } from '../../../hooks/useGetBeers'
import { mockList } from '../__mocks__/mockList'
import {
    BrowserRouter as Router,
  } from "react-router-dom";

jest.mock('../../../hooks/useGetBeers', () => ({
    useGetBeers: jest.fn(),
}))

describe('BeerList Component', () => {
    it('should render loading', () => {
        useGetBeers.mockImplementation(() => { return { beers: [], loading: true, error: false }})
        const { container } = render(<BeerList />)
        expect(container.getElementsByClassName('loadingText').length).toBe(1)
        expect(container).toMatchSnapshot()
    })

    it('should render with data', () => {
        useGetBeers.mockImplementation(() => { return { beers: mockList(), loading: false, error: true }})
        const { container } = render(<Router><BeerList /></Router>)
        expect(container.getElementsByClassName('beerName').length).toBe(50)
        expect(container).toMatchSnapshot()
    })

    it('should render with error', () => {
        useGetBeers.mockImplementation(() => { return { beers: [], loading: false, error: true }})
        const { container } = render(<BeerList />)
        expect(container).toMatchSnapshot()
    })
})