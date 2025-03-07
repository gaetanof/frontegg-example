import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect } from '@frontegg/react';

export function withAuth(Component) {
  return function ProtectedRoute(props) {
    const { isLoading, isAuthenticated } = useAuth();
    const loginWithRedirect = useLoginWithRedirect();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        loginWithRedirect();
      }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    useEffect(() => {
      console.log(`Auth state - isAuthenticated: ${isAuthenticated}`);
    }, [isAuthenticated]);

    if (isLoading) {
      return <div>Loading...</div>;  // Podrías poner un spinner real
    }

    return isAuthenticated ? <Component {...props} /> : null;
  };
}