import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GamePage, HomePage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: '/play',
    element: <GamePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
