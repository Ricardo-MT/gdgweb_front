import cssRules from 'src/app/view/editions/components/EditionDetail/components/TalkList.module.css';
import type { ITalk } from 'src/interfaces/ITalkProposal';

/**
 * @param talk `ITalk`
 * @returns ``
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const TalkListItem = ({ talk }: TalkListItemType) => {
  const { title, description, skills, createdBy, speakersIds } = talk;

  return (
    <div className={cssRules.listItem}>
      <p className={cssRules.title}>{title} </p>
      <p className={cssRules.description}>{description} </p>
      <p className={cssRules.speakers}>
        <span>Ponentes:</span> {speakersIds.map((speaker) => `${speaker.name} ${speaker.surname}`).join(', ')}{' '}
      </p>
      <p className={cssRules.skills}>
        <span>Tecnologías:</span> {skills.map((skill) => skill.toUpperCase()).join(', ')}{' '}
      </p>
    </div>
  );
};

type TalkListItemType = {
  talk: ITalk;
};

export default TalkListItem;
