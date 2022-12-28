import Header from 'src/app/components/header/Header';
import styles from 'src/app/view/home/Home.module.css';
import Community from 'src/app/view/home/sections/community/Community';
import Contact from 'src/app/view/home/sections/contact/Contact';
import Events from 'src/app/view/home/sections/events/Events';
import WelcomeSection from 'src/app/view/home/sections/welcome/Welcome';
import WhoWeAre from 'src/app/view/home/sections/who_are_we/WhoWeAre';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WelcomeSection />
      <WhoWeAre />
      <Community />
      <Events />
      <Contact />
    </div>
  );
};

export default HomePage;
