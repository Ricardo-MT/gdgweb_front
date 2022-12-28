import facebook from 'src/app/assets/facebook.png';
import linkedin from 'src/app/assets/linkedin.png';
import telegram from 'src/app/assets/telegram.png';
import twitter from 'src/app/assets/twitter.png';
import styles from 'src/app/components/footer/Footer.module.css';

const links = [
  {
    image: facebook,
    url: 'facebook',
  },
  {
    image: linkedin,
    url: 'linkedin',
  },
  {
    image: twitter,
    url: 'twitter',
  },
  {
    image: telegram,
    url: 'telegram',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.h3}>
          Google
          <br />
          Developers
          <br />
          Group
        </h3>
      </div>
      <div>
        <div>
          {links.map((link) => (
            <img
              src={link.image}
              key={link.url}
              className={styles.image}
              alt=''
            />
          ))}
        </div>
        <p>2022 - TODOS LOS DERECHOS RESERVADOS</p>
      </div>
      <div>
        <p className={styles.legal_text}>Términos y condiciones</p>
        <p className={styles.legal_text}>Condiciones de uso</p>
        <p className={styles.legal_text}>Política de cookies</p>
      </div>
    </footer>
  );
};

export default Footer;
