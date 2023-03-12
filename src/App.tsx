import type { RepositoryValues } from 'src/app/contexts/repositories/repositoriesContext';
import RepositoryProvider from 'src/app/contexts/repositories/repositoriesContext';
import RoutesComponent from 'src/router/Router';

const App = ({ repositories }: { repositories: RepositoryValues }) => {
  return (
    <RepositoryProvider repositories={repositories}>
      <RoutesComponent />
    </RepositoryProvider>
  );
};

export default App;
