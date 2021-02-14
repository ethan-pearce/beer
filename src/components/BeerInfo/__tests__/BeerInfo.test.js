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

const mockBeerInfo = {
    "name": "11.5° PLATO",
    "image": "https://res.cloudinary.com/teepublic/image/private/s--TsohP-Cw--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1513360267/production/designs/2182073_1.jpg",
    "id": "zTTWa2",
    "style": "Session IPA",
    "organic": false,
    "breweries": [
      {
        "name": "Sierra Nevada Brewing Company",
        "id": "nHLlnK",
        "href": "http://www.sierranevada.com/",
        "image": "https://brewerydb-images.s3.amazonaws.com/brewery/nHLlnK/upload_IClwuZ-medium.png",
        "locations": [
          {
            "name": "Main Brewery",
            "id": "IaQrxj",
            "type": "Micro Brewery",
            "region": "California",
            "postalCode": "95928"
          },
          {
            "name": "Asheville",
            "id": "aqLvLE",
            "type": "Micro Brewery",
            "region": "North Carolina",
            "postalCode": "28732"
          }
        ]
      }
    ]
}

describe('BeerInfo Component', () => {
    it('should render when loading', () => {
        useParams.mockImplementation(() => { return { beerId: 'zTTWa2'}})
        useGetBeer.mockImplementation(() => { return { beer: {}, loading: true, error: false }})
        const { container } = render(<BeerInfo />)
        expect(container).toMatchSnapshot()
    })

    it('should render with error', () => {
        useParams.mockImplementation(() => { return { beerId: 'zTTWa2'}})
        useGetBeer.mockImplementation(() => { return { beer: {}, loading: false, error: true }})
        const { container } = render(<BeerInfo />)
        expect(container).toMatchSnapshot()
    })

    it('should render with beer info', () => {
        useParams.mockImplementation(() => { return { beerId: 'zTTWa2'}})
        useGetBeer.mockImplementation(() => { return { beer: mockBeerInfo, loading: false, error: true }})
        const { container } = render(<BeerInfo />)
        expect(container).toMatchSnapshot()
    })
})