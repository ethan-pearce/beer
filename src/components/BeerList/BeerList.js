import React, { useContext } from 'react';
import './BeerList.css';
import { useGetBeers } from '../../hooks/useGetBeers'
import { Link } from "react-router-dom";
import BeerHeader from '../BeerHeader/BeerHeader'
import BeerContext from '../../app/BeerContext'
import Loading from '../Loading/Loading'

const BeerList = () => {
    const { beers, loading, error } = useGetBeers();
    const { beer, toggleBeer } = useContext(BeerContext);

    return (
        <div className={'container'}>
        {loading && <Loading />}
        {error && <div>Sorry something went wrong</div>}
        {beers.length >= 1 &&
            <ul className={'beerList'}>
                {beers.map(beer => {
                    const { name, image, id, style, organic } = beer;
                    return (
                        <li key={id} className={'beerItem'}>
                            <Link to={`/beer-info/${id}`} onClick={() => toggleBeer({ name, style, organic })}>
                                <BeerHeader title={name} subTitle={style} organic={organic} />
                                <img src={image} alt={name} className={'beerImage'}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        }
      </div>
    );
  }
  
  export default BeerList;