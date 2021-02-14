import { renderHook, act } from '@testing-library/react-hooks'
import { useGetBeer } from '../useGetBeer'

const testData = {"message":"READ ONLY MODE: Request Successful","data":{"id":"2cLm8B","name":"All Colorado Apricot Wheat","nameDisplay":"All Colorado Apricot Wheat","abv":"5.5","styleId":114,"isOrganic":"N","isRetired":"N","labels":{"icon":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-icon.png","medium":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-medium.png","large":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-large.png","contentAwareIcon":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-contentAwareIcon.png","contentAwareMedium":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-contentAwareMedium.png","contentAwareLarge":"https:\/\/brewerydb-images.s3.amazonaws.com\/beer\/2cLm8B\/upload_r59XGe-contentAwareLarge.png"},"status":"verified","statusDisplay":"Verified","createDate":"2017-12-14 15:18:59","updateDate":"2018-11-02 02:15:14","style":{"id":114,"categoryId":11,"category":{"id":11,"name":"Hybrid\/mixed Beer","createDate":"2012-03-21 20:06:46"},"name":"Fruit Wheat Ale or Lager with or without Yeast","shortName":"Fruit Wheat Ale","description":"This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent malted wheat. Fruit or fruit extracts contribute flavor and\/or aroma. Perceived fruit qualities should be authentic and replicate true fruit complexity as much as possible. Color should reflect a degree of fruit's color. Hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor from yeast can be typical but at low levels; however, phenolic, clovelike characteristics should not be perceived. Body should be light to medium in character. Diacetyl should not be perceived. When this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. Brewer may indicate on the bottle whether the yeast should be intentionally roused or if they prefer that the entry be poured as quietly as possible.","ibuMin":"10","ibuMax":"35","abvMin":"3.8","abvMax":"5","srmMin":"2","srmMax":"10","ogMin":"1.036","fgMin":"1.004","fgMax":"1.016","createDate":"2012-03-21 20:06:46","updateDate":"2015-04-07 15:43:55"},"breweries":[{"id":"q6vJUK","name":"Oskar Blues Brewery","nameShortDisplay":"Oskar Blues","description":"Oskar Blues Brewery is part of the Oskar Blues Grill and Brew restaurant and was located in Lyons, Colorado, near the city of Boulder. The brewery is now in Longmont, CO - a much larger town just east of Lyons. Oskar Blues is unique in that it serves craft-brewed beer in cans, contrary to the normal practice of bottling micro brews. The brewery is owned by Dale Katechis, a native of Florence, Alabama who brought canned beer and southern fried foods together for an interesting twist on the micro-brew pub.","website":"http:\/\/www.oskarblues.com\/","established":"1997","isOrganic":"N","images":{"icon":"https:\/\/brewerydb-images.s3.amazonaws.com\/brewery\/q6vJUK\/upload_wNi52r-icon.png","medium":"https:\/\/brewerydb-images.s3.amazonaws.com\/brewery\/q6vJUK\/upload_wNi52r-medium.png","large":"https:\/\/brewerydb-images.s3.amazonaws.com\/brewery\/q6vJUK\/upload_wNi52r-large.png","squareMedium":"https:\/\/brewerydb-images.s3.amazonaws.com\/brewery\/q6vJUK\/upload_wNi52r-squareMedium.png","squareLarge":"https:\/\/brewerydb-images.s3.amazonaws.com\/brewery\/q6vJUK\/upload_wNi52r-squareLarge.png"},"status":"verified","statusDisplay":"Verified","createDate":"2012-01-03 02:42:05","updateDate":"2018-11-02 02:15:01","isMassOwned":"N","isInBusiness":"Y","isVerified":"N","locations":[{"id":"jnSdDd","name":"Main Brewery","streetAddress":"1800 Pike Rd","extendedAddress":"Unit B","locality":"Longmont","region":"Colorado","postalCode":"80501","phone":"1-303-776-1914","website":"http:\/\/www.oskarblues.com\/","latitude":40.1389968,"longitude":-105.1227417,"isPrimary":"Y","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"micro","locationTypeDisplay":"Micro Brewery","countryIsoCode":"US","yearOpened":"1997","status":"verified","statusDisplay":"Verified","createDate":"2012-01-03 02:42:05","updateDate":"2018-11-02 02:14:56","timezoneId":"America\/Denver","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}},{"id":"I1q8kK","name":"Brevard","streetAddress":"342 Mountain Industrial Dr.","locality":"Brevard","region":"North Carolina","postalCode":"28712","phone":"(828) 883-2337","website":"http:\/\/www.oskarblues.com\/","hoursOfOperation":"Tasting Room\r\nMonday-Sunday: 12pm-8pm\r\n\r\nFree Brewery Tours\r\nMonday-Thursday: 4pm\r\nFriday-Sunday: 2pm, 3pm, 4pm, 5pm","latitude":35.2534666,"longitude":-82.706852,"isPrimary":"N","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"micro","locationTypeDisplay":"Micro Brewery","countryIsoCode":"US","yearOpened":"2012","status":"verified","statusDisplay":"Verified","createDate":"2012-12-13 15:22:31","updateDate":"2018-11-02 02:14:56","hoursOfOperationNotes":"Tasting Room\r\nMonday-Sunday: 12pm-8pm\r\n\r\nFree Brewery Tours\r\nMonday-Thursday: 4pm\r\nFriday-Sunday: 2pm, 3pm, 4pm, 5pm","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}},{"id":"TkDbDx","name":"Oskar Blues","streetAddress":"10420 Metric Blvd","extendedAddress":"#150","locality":"Austin","region":"Texas","postalCode":"78758","phone":"(512) 243-7054","website":"https:\/\/www.oskarblues.com\/brewery\/austin","hoursOfOperation":"Mon - Fri: 6pm\r\nSat - Sun: 2pm and 5pm","latitude":30.3835422,"longitude":-97.7142293,"isPrimary":"N","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"micro","locationTypeDisplay":"Micro Brewery","countryIsoCode":"US","yearOpened":"2016","status":"verified","statusDisplay":"Verified","createDate":"2017-03-16 05:29:16","updateDate":"2018-11-02 02:14:56","hoursOfOperationExplicit":{"sun":[{"startTime":"12:00pm","endTime":"8:00pm"}],"tue":[{"startTime":"12:00pm","endTime":"10:00pm"}],"wed":[{"startTime":"12:00pm","endTime":"10:00pm"}],"thu":[{"startTime":"12:00pm","endTime":"10:00pm"}],"fri":[{"startTime":"12:00pm","endTime":"10:00pm"}],"sat":[{"startTime":"12:00pm","endTime":"10:00pm"}]},"hoursOfOperationExplicitString":"sun-12:00pm-8:00pm,tue-12:00pm-10:00pm,wed-12:00pm-10:00pm,thu-12:00pm-10:00pm,fri-12:00pm-10:00pm,sat-12:00pm-10:00pm","hoursOfOperationNotes":"Mon - Fri: 6pm\r\nSat - Sun: 2pm and 5pm","timezoneId":"America\/Chicago","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}},{"id":"G2jxYM","name":"North Carolina","streetAddress":"342 Mountain Industrial Drive","locality":"Brevard","region":"North Carolina","postalCode":"28712","phone":"(828) 883-2337","website":"https:\/\/www.oskarblues.com\/","hoursOfOperation":"Mon - Thurs : 12pm - 8pm (Tour at 4pm)\r\nFri - Sat : 12pm - 10pm (Tours at 2, 3, 4, and 5pm)\r\nSun : 12pm - 8pm (Tours at 2, 3, 4, and 5pm)","latitude":35.2535881,"longitude":-82.7067671,"isPrimary":"N","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"micro","locationTypeDisplay":"Micro Brewery","countryIsoCode":"US","status":"deleted","statusDisplay":"Deleted","createDate":"2017-06-17 20:25:49","updateDate":"2018-11-02 02:14:56","hoursOfOperationNotes":"Mon - Thurs : 12pm - 8pm (Tour at 4pm)\r\nFri - Sat : 12pm - 10pm (Tours at 2, 3, 4, and 5pm)\r\nSun : 12pm - 8pm (Tours at 2, 3, 4, and 5pm)","timezoneId":"America\/New_York","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}}]}]},"status":"success"};

describe('when the request to beer info is successful', () => {
    beforeEach(() => {
        const mockFetchPromise = Promise.resolve({
            json: () => testData,
            ok: true,
        })

        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)
    })

    test('should get beer info', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetBeer('2cLm8B'))

        expect(result.current.beer).toEqual({})
        expect(result.current.loading).toBe(true)
        expect(result.current.error).toBe(false)

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beer).toMatchSnapshot()
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(false)
    })
})

describe('when the request to beer info fails due to a bad response', () => {
    beforeEach(() => {
        const mockFetchPromise = Promise.resolve({
            ok: false,
            statusText: 'error',
            json: () => ({}),
        })

        jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise)
    })

    test('it returns a bad response error', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetBeer('2cLm8B'))

        await act(async () => {
            await waitForNextUpdate()
        })

        expect(result.current.beer).toEqual({})
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(true)
    })
})
