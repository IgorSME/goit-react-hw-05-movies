import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
