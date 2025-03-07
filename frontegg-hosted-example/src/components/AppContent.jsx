import { useAuth, ContextHolder, AdminPortal } from '@frontegg/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

function AppContent() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleOpenAdminPortal = () => {
    AdminPortal.show();
  };

  useEffect(() => {
    console.log(`Navigated to: ${location.pathname}`);
    if (!isAuthenticated) {
      console.warn(`isAuthenticated is FALSE after navigation to ${location.pathname}`);
    }
  }, [location, isAuthenticated]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={logout}>Click to logout</button>
          </div>
          <div>
            <button onClick={handleOpenAdminPortal}>Settings</button>
          </div>
          <div>
            <Link to="/settings">Open Settings route</Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => console.log('User should be redirected to login')}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default AppContent;