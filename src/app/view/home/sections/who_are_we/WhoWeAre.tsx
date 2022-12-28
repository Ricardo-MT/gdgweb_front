import adjust from 'src/app/assets/adjust.png';
import styles from 'src/app/view/home/sections/who_are_we/WhoWeAre.module.css';

const WhoWeAre = () => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img
          src={adjust}
          className={styles.img}
          alt='adjust'
        />
      </div>
      <div className={styles.header}>
        <h1 className={styles.h1}>Quiénes somos y qué hacemos</h1>
      </div>
      <div className={styles.subtitle}>
        <h2 className={styles.h2}>
          Google
          <br />
          Developers
          <br />
          Group
        </h2>
      </div>
      <div className={styles.textContainer}>
        <p>
          Everyone has the right to an effective remedy by the competent
          national tribunals for acts violating the fundamental rights granted
          him by the constitution or by law.
        </p>
        <p>
          Everyone has the right to an effective remedy by the competent
          national tribunals for acts violating the fundamental rights granted
          him by the constitution or by law.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
