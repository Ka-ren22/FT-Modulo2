import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img src="" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

