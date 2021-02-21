import React from 'react'
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Breweries from '../Breweries'

describe('Breweries Component', () => {
    const breweries = [
        {
            name: 'test name 1',
            id: '1',
            href: 'https://test.com/',
            image: 'https://test.com/test.jpg',
            locations: [
                {
                    name: 'test name 1',
                    id: '1',
                    type: 'test type 1',
                    region: 'test region 1',
                    postalCode: '00001'
                }
            ]
        }
    ];

    it('should render', () => {
        const { container } = render(<Router><Breweries breweries={breweries}/></Router>)

        expect(container.getElementsByClassName('breweries').length).toBe(1)
        expect(container.getElementsByClassName('brewery').length).toBe(1)
        expect(container.getElementsByClassName('LocationTitle').length).toBe(1)
        expect(container.getElementsByClassName('location').length).toBe(1)
        expect(container).toMatchSnapshot()
    })

    it('should render with no locations if none are passed', () => {
        breweries[0].locations = [];
        const { container } = render(<Router><Breweries breweries={breweries}/></Router>)

        expect(container.getElementsByClassName('breweries').length).toBe(1)
        expect(container.getElementsByClassName('brewery').length).toBe(1)
        expect(container.getElementsByClassName('LocationTitle').length).toBe(0)
        expect(container.getElementsByClassName('location').length).toBe(0)
        expect(container).toMatchSnapshot()
    })

    it('should return null if not breweries passed', () => {
        const { container } = render(<Router><Breweries /></Router>)

        expect(container.getElementsByClassName('breweries').length).toBe(0)
        expect(container.getElementsByClassName('brewery').length).toBe(0)
        expect(container).toMatchSnapshot()
    })
})