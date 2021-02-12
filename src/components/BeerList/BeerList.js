import './BeerList.css';
import { useGetBeers } from '../../hooks/useGetBeers'

const BeerList = () => {
    const { beers, loading, error } = useGetBeers();

    return (
        <>
        {loading && <div>Loading .....</div>}
        {error && <div>Sorry something went wrong</div>}
        {beers.length >= 1 &&
            <ul className={'beerList'}>
                {beers.map(beer => {
                    const { name, image, id, style } = beer;
                    return (
                        <li key={id} className={'beerItem'}>
                            <h2 className={'beerName'}>{name}</h2>
                            <h3 className={'beerStyle'}>{style}</h3>
                            <img src={image} alt={name} className={'beerImage'}/>
                        </li>
                    )
                })}
            </ul>
        }
      </>
    );
  }
  
  export default BeerList;