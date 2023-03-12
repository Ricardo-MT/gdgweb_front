import type { PropsWithChildren } from 'react';

import { useLoaderData } from 'react-router-dom';

import Footer from 'src/app/components/footer/Footer';
import Header from 'src/app/components/header/Header';
import EditionDetailProvider from 'src/app/view/editions/components/EditionDetail/EditionDetailContext';
import cssRules from 'src/app/view/editions/components/EditionDetail/EditionDetailPage.module.css';
import EditionDetailView from 'src/app/view/editions/components/EditionDetail/EditionDetailView';
import type { IEdition } from 'src/interfaces/IEdition';

/**
 * @param children
 * @returns ``
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const EditionDetailPage = ({ children }: EditionDetailPageType) => {
  const data = useLoaderData();

  return (
    <EditionDetailProvider edition={(data as IEdition) || null}>
      <div className={cssRules.pageWrapper}>
        <Header />
        <EditionDetailView />
        <Footer />
      </div>
    </EditionDetailProvider>
  );
};

type EditionDetailPageType = PropsWithChildren & {};

export default EditionDetailPage;
