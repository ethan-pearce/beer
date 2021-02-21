import React, { useContext } from 'react';
import './BeerList.css';
import { useGetBeers } from '../../hooks/useGetBeers'
import { Link, useParams } from "react-router-dom";
import BeerHeader from '../../components/BeerHeader/BeerHeader'
import BeerContext from '../../app/BeerContext'
import Loading from '../../components/Loading/Loading'

const BeerList = () => {
    let params = useParams();
    const { beers, info, loading, error } = useGetBeers(params?.breweryId);
    const { totalResults } = info;
    const { setBeer } = useContext(BeerContext);

    return (
        <div className={'container'}>
        {loading && <Loading />}
        {error && <div>Sorry something went wrong</div>}
        {!loading &&
            <>
            {totalResults &&
                <p className={'totalResults'}>{`${totalResults} Results`}</p>
            }
            {beers.length >= 1 &&
                <ul className={'beerList'}>
                    {beers.map(beer => {
                        const { name, image, id, style, organic } = beer;
                        return (
                            <li key={id} className={'beerItem'}>
                                <Link to={`/beer-info/${id}`} onClick={() => setBeer({ name, style, organic })}>
                                    <BeerHeader title={name} subTitle={style} organic={organic} />
                                    <img src={image} alt={name} className={'beerImage'} loading="lazy"/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
            </>
        }
      </div>
    );
}

export default BeerList;