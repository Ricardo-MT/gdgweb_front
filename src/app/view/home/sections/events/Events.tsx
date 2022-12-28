import code from 'src/app/assets/code.png';
import mobile from 'src/app/assets/mobile.png';
import pc from 'src/app/assets/pc.png';
import styles from 'src/app/view/home/sections/events/Events.module.css';

const pastEvents = [
  {
    date: '26/12/2019',
    image: code,
  },
  {
    date: '26/12/2020',
    image: pc,
  },
  {
    date: '26/12/2021',
    image: mobile,
  },
];

const Events = () => {
  return (
    <section className={styles.section}>
      <div className={styles.flex_4}>
        <h2 className={styles.h2}>Próximo evento</h2>
      </div>
      <div className={`${styles.flex_1} ${styles.next_event_date}`}>
        <span>26/12/2022</span>
        <span>ver itinerario</span>
      </div>
      <div className={styles.flex_1}>
        <h3 className={styles.h3}>Eventos pasados</h3>
      </div>
      <div className={styles.flex_4}>
        {pastEvents.map((event) => (
          <div
            className={styles.event_item}
            key={event.date}
          >
            <img
              className={styles.image}
              src={event.image}
              alt=''
            />
            <span>{event.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
