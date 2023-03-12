import { useMemo } from 'react';

import { createBrowserRouter, RouterProvider, Navigate, useRouteError } from 'react-router-dom';

import type { RepositoryValues } from 'src/app/contexts/repositories/repositoriesContext';
import { useRepositoryContext } from 'src/app/contexts/repositories/repositoriesContext';
import ContactPage from 'src/app/view/contact/Contact';
import EditionDetailPage from 'src/app/view/editions/components/EditionDetail/EditionDetailPage';
import EditionsPage from 'src/app/view/editions/EditionsPage';
import HomePage from 'src/app/view/home/Home';
import PartnersPage from 'src/app/view/partners/Partners';
import ProjectPage from 'src/app/view/project/Project';
import PATHS from 'src/router/routes';

const getRouter = ({ editionRepository }: RepositoryValues) => {
  return createBrowserRouter([
    {
      path: PATHS.root,
      hasErrorBoundary: true,
      errorElement: <ErrorBoundary />,
      element: (
        <Navigate
          to={PATHS.home}
          replace
        />
      ),
    },
    {
      path: PATHS.home,
      element: <HomePage />,
    },
    {
      path: PATHS.project,
      element: <ProjectPage />,
    },
    {
      path: PATHS.editions,
      element: <EditionsPage />,
    },
    {
      path: `${PATHS.editions}/:editionId`,
      element: <EditionDetailPage />,
      errorElement: <ErrorBoundary />,
      loader: async ({ params }) => editionRepository.getEditionById(String(params.editionId)),
    },
    {
      path: PATHS.partners,
      element: <PartnersPage />,
    },
    {
      path: PATHS.contact,
      element: <ContactPage />,
    },
  ]);
};

const RoutesComponent = () => {
  const repositories = useRepositoryContext();
  const routes = useMemo(() => getRouter(repositories), [repositories]);
  return <RouterProvider router={routes} />;
};

export default RoutesComponent;

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
};
