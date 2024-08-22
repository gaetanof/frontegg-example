import './App.css';
import {
  AdminPortal,
  useAuth,
  useAuthActions,
  useLoginWithRedirect,
  ContextHolder,
} from '@frontegg/react';
import { useState } from 'react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();
  const [selectedTenant, setSelectedTenant] = useState('');

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.openHosted();
  };

  const handleSwitchTenant = () => {
    if (selectedTenant) {
      switchTenant({ tenantId: selectedTenant });
    } else {
      alert('Please select a tenant first');
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <span>jwt: {user?.accessToken}</span>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <button onClick={handleClick}>Settings</button>

          {/* Dropdown for selecting tenant */}
          <div>
            <label>Select Tenant:</label>
            <select
              value={selectedTenant}
              onChange={(e) => setSelectedTenant(e.target.value)}
            >
              <option value="" disabled>
                Select a tenant
              </option>
              {user.tenantIds.map((tenantId) => (
                <option key={tenantId} value={tenantId}>
                  {tenantId}
                </option>
              ))}
            </select>
            <button onClick={handleSwitchTenant}>Select Active Tenant</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
