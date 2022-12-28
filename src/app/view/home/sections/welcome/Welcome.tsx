import styles from 'src/app/view/home/sections/welcome/Welcome.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionChild}>
        <h1 className={styles.h1}>
          TU COMUNIDAD
          <br />
          TECH
        </h1>
        <br />
        <h2 className={styles.h2}>EN EL CAMPO DE GIBRALTAR</h2>
      </div>
    </section>
  );
};

export default WelcomeSection;
