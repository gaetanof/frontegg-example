import React, { useEffect, useState } from 'react';
import { FronteggProvider } from '@frontegg/react';

const AuthProvider = ({ children }) => {
  const [authContextOptions, setAuthContextOptions] = useState(null);

  const authOptions = {
    hostedLoginOptions: {
      loadUserOnFirstLoad: true,
    },
  };

  useEffect(() => {
    const settings = {
      frontegg: {
        base_url: import.meta.env.VITE_FRONTEGG_BASE_URL,
        client_id: import.meta.env.VITE_FRONTEGG_CLIENT_ID,
      },
    };

    setAuthContextOptions({
      baseUrl: settings.frontegg.base_url,
      clientId: settings.frontegg.client_id,
    });
  }, []);

  return authContextOptions ? (
    <FronteggProvider
      contextOptions={authContextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      {children}
    </FronteggProvider>
  ) : (
    <></>
  );
};

export default AuthProvider;
