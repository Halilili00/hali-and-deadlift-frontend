import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './features/layout/Layout';
import UnderConstruction from './features/under-construction/UnderConstruction';

const routes = [
  { path: '/', element: <UnderConstruction /> },
  { path: '/workout', element: <UnderConstruction /> },
  { path: '/builder', element: <UnderConstruction /> },
  { path: '/progress', element: <UnderConstruction /> },
  { path: '/library', element: <UnderConstruction /> },
  { path: '/articles', element: <UnderConstruction /> },
  { path: '/settings', element: <UnderConstruction /> },
  { path: '/profile', element: <UnderConstruction /> },
];

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: routes,
        },
      ])}
    />
  );
}

export default App;
