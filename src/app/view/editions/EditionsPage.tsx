import EditionsView from 'src/app/view/editions/components/EditionsView';
import EditionsProvider from 'src/app/view/editions/contexts/EditionsContext';

const EditionsPage = () => {
  return (
    <EditionsProvider>
      <EditionsView />
    </EditionsProvider>
  );
};

export default EditionsPage;
