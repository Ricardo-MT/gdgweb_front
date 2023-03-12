import cssRules from 'src/app/view/editions/components/EditionList/EditionsList.module.css';
import EditionListItem from 'src/app/view/editions/components/ListItem/EditionListItem';
import type { IEdition } from 'src/interfaces/IEdition';

/**
 * @param editions Lista de `IEditions`
 * @returns `<main><EditionListItem/>[]</main>`
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const EditionsList = ({ editions }: EditionsListType) => {
  return (
    <main className={cssRules.listContainer}>
      {editions.map((edition) => (
        <EditionListItem
          key={edition._id}
          edition={edition}
        />
      ))}
    </main>
  );
};

type EditionsListType = {
  editions: IEdition[];
};

export default EditionsList;
