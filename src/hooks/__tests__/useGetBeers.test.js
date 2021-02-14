import { renderHook, act } from '@testing-library/react-hooks'
import { useGetBeers } from '../useGetBeers'
import data from '../__mocks__/beers.json'

describe('when the request to beers info is successful', () => {
    beforeEach(() => {
        const mockFetchPromise = Promise.resolve({
            json: () => data,
            ok: true,
        })

        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)
    })

    test('should get beers', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetBeers())

        expect(result.current.beers).toEqual([])
        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBe(false)

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beers).toMatchSnapshot()
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
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(true)
    })
})
