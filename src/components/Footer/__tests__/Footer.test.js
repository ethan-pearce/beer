import React from 'react'
import { render } from '@testing-library/react';
import Footer from '../Footer'

describe('Footer Component', () => {
    it('should render', () => {
        const { container } = render(<Footer />)

        expect(container.getElementsByClassName('footer').length).toBe(1)
        expect(container).toMatchSnapshot()
    })
})