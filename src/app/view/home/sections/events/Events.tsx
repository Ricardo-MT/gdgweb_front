import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import code from 'src/app/assets/code.png';
import mobile from 'src/app/assets/mobile.png';
import pc from 'src/app/assets/pc.png';
import { useRepositoryContext } from 'src/app/contexts/repositories/repositoriesContext';
import styles from 'src/app/view/home/sections/events/Events.module.css';
import type { IEdition } from 'src/interfaces/IEdition';
import PATHS from 'src/router/routes';

const images = [code, pc, mobile];

const Events = () => {
  const { editionRepository } = useRepositoryContext();
  const [events, setEvents] = useState<IEdition[]>([]);
  const [nextEvent, setNextEvent] = useState<IEdition | null>(null);
  useEffect(() => {
    editionRepository.getNextEvent().then(setNextEvent).catch(console.log);
    editionRepository.getLatestEditions().then(setEvents).catch(console.log);
  }, [editionRepository]);
  return (
    <section className={styles.section}>
      <div className={styles.flex_4}>
        <h2 className={styles.h2}>Próximo evento</h2>
      </div>
      {nextEvent && <h3>{nextEvent.title}</h3>}
      <div className={`${styles.flex_1} ${styles.next_event_date}`}>
        {nextEvent && (
          <>
            <span>{new Date(nextEvent.date).toLocaleDateString()}</span>
            <NavLink to={`${PATHS.editions}/${nextEvent._id}`}>ver detalles</NavLink>
          </>
        )}
      </div>
      <div className={styles.flex_1}>
        <h3 className={styles.h3}>Eventos pasados</h3>
      </div>
      <div className={styles.flex_4}>
        {events.map(({ _id, date, title }, i) => (
          <NavLink
            className={styles.event_item}
            key={date}
            to={`${PATHS.editions}/${_id}`}
          >
            <img
              className={styles.image}
              src={images[i % images.length]}
              alt=''
            />
            <span>{title}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Events;
