import './BeerInfo.css';
import React, { useContext } from 'react';
import { useGetBeer } from '../../hooks/useGetBeer'
import { useParams } from "react-router-dom";
import BeerHeader from '../../components/BeerHeader/BeerHeader'
import BeerContext from '../../app/BeerContext'
import Loading from '../../components/Loading/Loading'
import Breweries from '../../components/Breweries/Breweries'

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