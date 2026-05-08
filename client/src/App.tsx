import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './features/layout/Layout';
import UnderConstruction from './features/under-construction/UnderConstruction';
import LibraryPage from './features/library/LibraryPage';

const routes = [
  { path: '/', Component: UnderConstruction },
  { path: '/workout', Component: UnderConstruction },
  { path: '/builder', Component: UnderConstruction },
  { path: '/progress', Component: UnderConstruction },
  {
    path: '/library',
    children: [
      { index: true, Component: LibraryPage },
      { path: ':exerciseId', Component: UnderConstruction },
    ],
  },
  { path: '/articles', Component: UnderConstruction },
  { path: '/settings', Component: UnderConstruction },
  { path: '/profile', Component: UnderConstruction },
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
