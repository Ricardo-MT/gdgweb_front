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
        <div className={styles.textContainerChild}>
          <p>
            Somos una comunidad tech donde compartimos una misma pasión por la
            innovación. Estamos comprometidos a mantener el Campo de Gibraltar a
            la vanguardia.
          </p>
          <p>
            Esto lo conseguimos, en parte, divulgando las últimas tecnologías y
            aprendiendo de ellas. Nos esforzamos por crear un entorno en el que
            todos podamos contribuir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
