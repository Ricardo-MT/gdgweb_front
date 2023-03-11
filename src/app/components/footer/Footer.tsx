import facebook from 'src/app/assets/facebook.png';
import linkedin from 'src/app/assets/linkedin.png';
import telegram from 'src/app/assets/telegram.png';
import twitter from 'src/app/assets/twitter.png';
import styles from 'src/app/components/footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gdg_area}>
        <h3 className={styles.h3}>
          Google
          <br />
          Developers
          <br />
          Group
        </h3>
      </div>
      <div className={styles.social_area}>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={link.image}
                  className={styles.image}
                  alt={`Nuestra comunidad en ${link.name}`}
                />
              </a>
            </li>
          ))}
        </ul>
        <p>2023 - TODOS LOS DERECHOS RESERVADOS</p>
      </div>
      <div className={styles.legal_area}>
        <p className={styles.legal_text}>Términos y condiciones</p>
        <p className={styles.legal_text}>Condiciones de uso</p>
        <p className={styles.legal_text}>Política de cookies</p>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    name: 'Facebook',
    image: facebook,
    url: 'https://www.facebook.com/gdgalgeciras',
  },
  {
    name: 'LinkedIn',
    image: linkedin,
    url: 'https://www.linkedin.com/groups/9065708/',
  },
  {
    name: 'Twitter',
    image: twitter,
    url: 'https://twitter.com/AlgecirasGdg',
  },
  {
    name: 'Telegram',
    image: telegram,
    url: 'https://t.me/+-Rt6dIwkm8hhZDdk',
  },
];
