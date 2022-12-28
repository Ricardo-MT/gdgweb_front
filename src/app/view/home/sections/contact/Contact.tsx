import facebook from 'src/app/assets/facebook.png';
import linkedin from 'src/app/assets/linkedin.png';
import telegram from 'src/app/assets/telegram.png';
import twitter from 'src/app/assets/twitter.png';
import Footer from 'src/app/components/footer/Footer';
import styles from 'src/app/view/home/sections/contact/Contact.module.css';

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

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.flex_1} ${styles.section_child}`}>
        <h2 className={styles.h2}>Ponte en contacto</h2>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
