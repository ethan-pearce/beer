import React from 'react'
import { render } from '@testing-library/react';
import BeerHeader from '../BeerHeader'

describe('BeerHeader Component', () => {
    it('should render', () => {
        const { container } = render(<BeerHeader title={'test header'} subTitle={'test sub-header'} />)
        expect(container).toMatchSnapshot()
    })

    it('should render with Organic Icon', () => {
        const { container } = render(<BeerHeader title={'test header'} subTitle={'test sub-header'} organic={true} />)

        expect(container.getElementsByClassName('organic').length).toBe(1)
        expect(container).toMatchSnapshot()
    })
})