import React from 'react'
import { render } from '@testing-library/react';
import Header from '../Header'
import { BrowserRouter as Router } from "react-router-dom";

describe('Header Component', () => {
    it('should render', () => {
        const { container } = render(<Router><Header /></Router>)

        expect(container.getElementsByClassName('header').length).toBe(1)
        expect(container.getElementsByClassName('headerTitle').length).toBe(1)
        expect(container).toMatchSnapshot()
    })
})