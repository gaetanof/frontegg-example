import { FC, useEffect } from 'react';
import {
  useAuthRoutes,
  useAuthUserOrNull,
  useIsAuthenticated,
} from '@frontegg/react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectRoute: FC = (props) => {
  const user = useAuthUserOrNull();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUrl } = useAuthRoutes();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(
        [
          loginUrl,
          '?redirectUrl=',
          encodeURIComponent(
            location.pathname + location.search + location.hash
          ),
        ].join('')
      );
    }
  }, [navigate, loginUrl]);

  if (isAuthenticated && user) return <>{props.children}</>;
  return null;
};

export default ProtectRoute;
