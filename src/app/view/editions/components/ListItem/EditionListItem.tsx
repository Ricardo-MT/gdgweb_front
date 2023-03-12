import { NavLink } from 'react-router-dom';

import cssRules from 'src/app/view/editions/components/ListItem/EditionListItem.module.css';
import type { IEdition } from 'src/interfaces/IEdition';
import PATHS from 'src/router/routes';
/**
 * @param edition
 * @returns ``
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const EditionListItem = ({ edition }: EditionListItemType) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, title, description, date, location, organizer } = edition;
  return (
    <article className={cssRules.editionContainer}>
      <div className={cssRules.header}>
        <p className={`${cssRules.oneLineNoOverflow} ${cssRules.underline}`}>{title}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className={cssRules.body}>
        <p className={cssRules.oneLineNoOverflow}>{description}</p>
        <NavLink to={`${PATHS.editionDetail}/${_id}`}>ver detalles</NavLink>
      </div>
      <div className={cssRules.footer}>
        <p className={cssRules.oneLineNoOverflow}>
          <span>Location:</span> {location}
        </p>
        <p className={cssRules.oneLineNoOverflow}>
          <span>Organizer:</span> {organizer}
        </p>
      </div>
    </article>
  );
};

type EditionListItemType = { edition: IEdition };

export default EditionListItem;
