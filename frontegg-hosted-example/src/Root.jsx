import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Root = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación Frontegg</h1>
      <nav>
        <Link to="/settings">Ir a Configuración</Link>
      </nav>
      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
};
