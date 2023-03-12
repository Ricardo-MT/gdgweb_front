import TalkList from 'src/app/view/editions/components/EditionDetail/components/TalkList';
import { useEditionDetailContext } from 'src/app/view/editions/components/EditionDetail/EditionDetailContext';
import cssRules from 'src/app/view/editions/components/EditionDetail/EditionDetailPage.module.css';
import type { IEdition } from 'src/interfaces/IEdition';

/**
 * @param edition
 * @returns ``
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const EditionDetailView = () => {
  const { edition } = useEditionDetailContext();
  if (!edition) return <p>No event</p>;
  const { title, description, date, organizer, location, talks } = edition;
  return (
    <main className={cssRules.pageContainer}>
      <h1>{title}</h1>
      <h3>{new Date(date).toLocaleDateString()} </h3>
      <p>{description}</p>
      <p>
        <span>Organizador:</span> {organizer}
      </p>
      <p>
        <span>Localización:</span> {location}
      </p>
      <h2 className={cssRules.charlasSubtitle}>Charlas:</h2>
      <TalkList talks={talks} />
    </main>
  );
};

type EditionDetailViewType = { edition: IEdition };

export default EditionDetailView;
