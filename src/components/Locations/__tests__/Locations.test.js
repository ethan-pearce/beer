import React from 'react'
import { render } from '@testing-library/react';
import Locations from '../Locations'

describe('Location Component', () => {
    const locations = [
        {
            name: 'test name 1',
            id: '1',
            type: 'test type 1',
            region: 'test region 1',
            postalCode: '00001'
        },
        {
            name: 'test name 2',
            id: '2',
            type: 'test type 2',
            region: 'test region 2',
            postalCode: '00002'
        },
    ];

    it('should render', () => {
        const { container } = render(<Locations locations={locations}/>)

        expect(container.getElementsByClassName('LocationTitle').length).toBe(1)
        expect(container.getElementsByClassName('location').length).toBe(2)
        expect(container).toMatchSnapshot()
    })

    it('should return null if not locations passed', () => {
        const { container } = render(<Locations />)

        expect(container.getElementsByClassName('LocationTitle').length).toBe(0)
        expect(container.getElementsByClassName('location').length).toBe(0)
        expect(container).toMatchSnapshot()
    })
})