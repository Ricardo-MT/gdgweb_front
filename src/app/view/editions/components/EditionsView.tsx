import Footer from 'src/app/components/footer/Footer';
import Header from 'src/app/components/header/Header';
import EditionsList from 'src/app/view/editions/components/EditionList/EditionsList';
import { useEditionsContext } from 'src/app/view/editions/contexts/EditionsContext';
import Events from 'src/app/view/home/sections/events/Events';

const EditionsView = () => {
  const { editions } = useEditionsContext();
  return (
    <>
      <Header />
      <Events />
      <EditionsList editions={editions} />
      <Footer />
    </>
  );
};

export default EditionsView;
