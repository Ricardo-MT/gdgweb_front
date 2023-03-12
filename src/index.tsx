import React from 'react';

import ReactDOM from 'react-dom/client';

import App from 'src/App';
import type { RepositoryValues } from 'src/app/contexts/repositories/repositoriesContext';
import 'src/index.css';
import EditionRepository from 'src/repositories/EditionRepository';
import apiClient from 'src/services/api/api.config';
import EditionServices from 'src/services/api/services/EditionServices';

const repositories: RepositoryValues = {
  editionRepository: new EditionRepository(new EditionServices(apiClient)),
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App repositories={repositories} />
  </React.StrictMode>
);
