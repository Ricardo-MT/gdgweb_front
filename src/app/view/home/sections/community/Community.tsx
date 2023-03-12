import logo from 'src/app/assets/logo.png';
import styles from 'src/app/view/home/sections/community/Community.module.css';

const Community = () => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img
          src={logo}
          className={styles.img}
          alt='adjust'
        />
      </div>
      <div className={styles.header}>
        <h1 className={styles.h1}>La Comunidad</h1>
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
            Nuestra comunidad se ha convertido en un área de aprendizaje mutuo y colaboración, donde profesionales con
            experiencias varias intercambian conocimientos para mejorar su base de habilidades.
          </p>
          <p>
            Con foros de discusión, tutoriales y proyectos conjuntos, los miembros de la comunidad comparten compromisos
            comunes y construyen nuevas amistades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
