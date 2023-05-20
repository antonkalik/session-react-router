import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { StyledNavigation } from './styles';

export const Navigation = ({ session }) => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    setLoading(true);
    await session.logout();
    setLoading(false);
    navigate('/login');
  };

  return (
    <StyledNavigation>
      <NavLink to="/">Home</NavLink>
      {session.data ? (
        <div>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/account">My Profile</NavLink>
          <button disabled={isLoading} onClick={onLogout}>
            {isLoading ? 'loading...' : 'Logout'}
          </button>
        </div>
      ) : (
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </StyledNavigation>
  );
};
