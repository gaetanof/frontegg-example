import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FronteggProvider } from '@frontegg/react';
import App from './App';
import { Root } from './Root';
import { Settings } from './pages/Settings';

const contextOptions = {
  baseUrl: '[your-base-url]',
  clientId: '[your-client-id]',
};

const routes = [
  {
    path: '/*',
    element: (
      <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
      </FronteggProvider>
    ),
    children: [
      { path: '', element: <Root /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
