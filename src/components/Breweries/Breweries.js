import './Breweries.css';
import { Link } from 'react-router-dom';
import Locations from '../Locations/Locations';

export const Breweries = ({breweries}) => {
    if(!breweries || breweries.length <= 0){
        return null;
    }

    return (
        <ul className={'breweries'}>
          {breweries.map(brewery => {
            const { href, name, image, locations, id } = brewery;
            return (
              <li key={id} className={'brewery'}>
                <Link to={`/brewery/${id}`} className={'breweryName'}>{name}</Link>
                <a className={'breweryLink'} href={href} rel="noreferrer" target="_blank">{href}</a>
                <img className={'breweryImage'} alt={name} src={image}/>
                <Locations locations={locations} breweryName={name}/>
              </li>
            )
          })}
      </ul>
    )
}

export default Breweries;