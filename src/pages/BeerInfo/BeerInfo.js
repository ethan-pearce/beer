import React, { useContext } from 'react';
import './BeerInfo.css';
import { useGetBeer } from '../../hooks/useGetBeer'
import { useParams, Link } from "react-router-dom";
import BeerHeader from '../../components/BeerHeader/BeerHeader'
import BeerContext from '../../app/BeerContext'
import Loading from '../../components/Loading/Loading'

const BeerInfo = () => {
  let params = useParams();
  const { beer, loading, error } = useGetBeer(params?.beerId)
  const { beer: beerFromContext } = useContext(BeerContext);

  const name = beerFromContext.name ? beerFromContext.name : beer.name;
  const style = beerFromContext.style ? beerFromContext.style : beer.style;
  const organic = beerFromContext.organic ? beerFromContext.organic : beer.organic;

  return (
    <div className={'beerInfo'}>
        {beerFromContext.name || beer.name ?
          <BeerHeader title={name} subTitle={style} organic={organic} titleClassName={'beerInfoTitle'}/>
        : null}
        {loading && <Loading />}
        {error && <div>Sorry something went wrong</div>}
        {beer?.breweries &&
            beer.breweries.length > 0 &&
              <Breweries breweries={beer.breweries}/>
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
                <Link to={`/brewery/${id}`}>
                  <h5 className={'breweryName'}>{name}</h5>
                  <p className={'breweryLink'}>{href}</p>
                  <img className={'breweryImage'} alt={name} src={image}/>
                </Link>
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