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
  const { breweries, description } = beer;
  const { beer: beerFromContext } = useContext(BeerContext);

  const name = beerFromContext.name || beer.name;
  const style = beerFromContext.style || beer.style;
  const organic = beerFromContext.organic || beer.organic;

  return (
    <div className={'beerInfo'}>
        {name ?
          <BeerHeader title={name} subTitle={style} organic={organic} titleClassName={'beerInfoTitle'}/>
        : null}
        {loading && <Loading />}
        {error && <div>Sorry something went wrong</div>}
        {description && <p className={'beerDescription'}>{description}</p>}
        {breweries &&
            breweries.length > 0 &&
              <Breweries breweries={beer.breweries}/>
        }
    </div>
  );
}

export default BeerInfo;

const Breweries = ({breweries}) => {
  return (
      <ul className={'breweries'}>
        {breweries.map(brewery => {
          const { href, name, image, locations, id } = brewery;
          return (
            <li key={id} className={'brewery'}>
              <Link to={`/brewery/${id}`} className={'breweryName'}>{name}</Link>
              <a className={'breweryLink'} href={href}>{href}</a>
              <img className={'breweryImage'} alt={name} src={image}/>
              <Locations locations={locations} breweryName={name}/>
            </li>
          )
        })}
    </ul>
  )
}

const Locations = ({locations, breweryName}) => {
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
              <a href={`https://www.google.com/maps/search/?api=1&query=${breweryName}+${name}+${region}+${postalCode}`}>
                <p>{name}</p>
                <p>{`Type: ${type}`}</p>
                <p>{region}</p>
                <p>{postalCode}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}