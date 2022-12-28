import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import ContactPage from 'src/app/view/contact/Contact';
import EditionsPage from 'src/app/view/editions/Editions';
import HomePage from 'src/app/view/home/Home';
import PartnersPage from 'src/app/view/partners/Partners';
import ProjectPage from 'src/app/view/project/Project';
import PATHS from 'src/router/routes';

const router = createBrowserRouter([
  {
    path: PATHS.root,
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
    path: PATHS.partners,
    element: <PartnersPage />,
  },
  {
    path: PATHS.contact,
    element: <ContactPage />,
  },
]);

const RoutesComponent = () => {
  return <RouterProvider router={router} />;
};

export default RoutesComponent;
