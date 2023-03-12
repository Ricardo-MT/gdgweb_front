import cssRules from 'src/app/view/editions/components/EditionDetail/components/TalkList.module.css';
import TalkListItem from 'src/app/view/editions/components/EditionDetail/components/TalkListItem';
import type { ITalk } from 'src/interfaces/ITalkProposal';

/**
 * @param talks
 * @returns ``
 * @author Ricardo Travieso (https://ricardomejiastravieso.com/)
 */
const TalkList = ({ talks }: TalkListType) => {
  if (!talks.length) return <p>No talks</p>;
  return (
    <main className={cssRules.listContainer}>
      {talks.map((talk) => (
        <TalkListItem
          key={talk._id}
          talk={talk}
        />
      ))}
    </main>
  );
};

type TalkListType = {
  talks: ITalk[];
};

export default TalkList;
