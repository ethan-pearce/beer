import { renderHook, act } from '@testing-library/react-hooks';
import { useGetBeers } from '../useGetBeers';

describe('when the request to beers info is successful', () => {
    test('should get beers', async () => {
        const mock = require('../__mocks__/beers.json');
        const mockFetchPromise = Promise.resolve({
            json: () => mock,
            ok: true,
        })
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)

        const { result, waitForNextUpdate } = renderHook(() => useGetBeers())

        expect(result.current.beers).toEqual([])
        expect(result.current.info).toEqual({})
        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBe(false)

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beers).toMatchSnapshot()
        expect(result.current.info).toEqual({ totalResults: 1109, numberOfPages: 23, currentPage: 1})
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(false)
    })

    test('should get beers for page 2', async () => {
        const mock = require('../__mocks__/beersPg2.json');
        const mockFetchPromise = Promise.resolve({
            json: () => mock,
            ok: true,
        })
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)
        const { result, waitForNextUpdate } = renderHook(() => useGetBeers(undefined, 2))

        expect(result.current.beers).toEqual([])
        expect(result.current.info).toEqual({})
        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBe(false)

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beers).toMatchSnapshot()
        expect(result.current.info).toEqual({ totalResults: 1109, numberOfPages: 23, currentPage: 2})
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(false)
    })
})

describe('when the request to beers info fails due to a bad response', () => {
    beforeEach(() => {
        const mockFetchPromise = Promise.resolve({
            ok: false,
            statusText: 'error',
            json: () => ({}),
        })

        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)
    })

    test('it returns a bad response error', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetBeers())

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beers).toEqual([])
        expect(result.current.info).toEqual({})
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(true)
    })
})
