import React from 'react'
import { render } from '@testing-library/react';
import Loading from '../Loading'

describe('Loading Component', () => {
    it('should render', () => {
        const { container } = render(<Loading />)
        expect(container.getElementsByClassName('loadingText')[0].innerHTML).toBe('Loading ....')
        expect(container).toMatchSnapshot()
    })
})