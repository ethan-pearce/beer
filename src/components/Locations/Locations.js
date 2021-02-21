import './Locations.css';

export const Locations = ({locations, breweryName}) => {
    if(!locations || locations.length <= 0){
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
                <a href={`https://www.google.com/maps/search/?api=1&query=${breweryName}+${name}+${region}+${postalCode}`} rel="noreferrer" target="_blank">
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

  export default Locations;