import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={'header'}>
      <Link to={'/'} className={'headerTitle'}>
        Speciality Beers
      </Link>
    </header>
  );
}

export default Header;