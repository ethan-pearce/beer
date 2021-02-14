import './BeerInfo.css';
import { useGetBeer } from '../../hooks/useGetBeer'
import { useParams } from "react-router-dom";
import BeerHeader from '../BeerHeader/BeerHeader'

const BeerInfo = () => {
  let { beerId } = useParams();
  const { beer, loading, error,} = useGetBeer(beerId)
  const { name, style, breweries, organic } = beer;

  return (
    <div className={'beerInfo'}>
        {loading && <div>Loading .....</div>}
        {error && <div>Sorry something went wrong</div>}
        {name &&
          <>
            <BeerHeader title={name} subTitle={style} organic={organic}/>
            {breweries.length > 0 &&
              <Breweries breweries={breweries}/>
            }
          </>
        }
    </div>
  );
}

export default BeerInfo;

const Breweries = ({breweries}) => {
  return (
    <>
      <h4 className={'breweriesTitle'}>Stocked at these breweries:</h4>
        <ul className={'breweries'}>
          {breweries.map(brewery => {
            const { href, name, image, locations, id } = brewery;
            return (
              <li key={id} className={'brewery'}>
                <a href={href}>
                  <h5>{name}</h5>
                  <p>{href}</p>
                  <img alt={name} src={image}/>
                </a>
                <Locations locations={locations}/>
              </li>
            )
          })}
      </ul>
    </>
  )
}

const Locations = ({locations}) => {
  if(locations.length <= 0){
    return null;
  }

  return (
    <>
      <p className={'LocationTitle'}>Locations:</p>
      <ul className={'locations'}>
        {locations.map(location => {
          const { id, name, type, region, postalCode } = location;
          return (
            <li key={id} className={'location'}>
              <p>{name}</p>
              <p>{`Type: ${type}`}</p>
              <p>{region}</p>
              <p>{postalCode}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}