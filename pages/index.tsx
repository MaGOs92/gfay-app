import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { Head } from '../components/layout/Head/Head';
import { Section } from '../components/ui/Section/Section';
import { LinkButton } from '../components/ui/LinkButton/LinkButton';
import LinkedInIcon from '../public/icons/linkedin.svg';
import GithubIcon from '../public/icons/github.svg';
import { Footer } from '../components/layout/Footer/Footer';
import { AboutHeader } from '../components/ui/AboutHeader/AboutHeader';
import { Connect4 } from '../components/ui/Connect4/Connect4';
import { GameState } from '../components/ui/Connect4/connect4.types';
import { event } from '../utils/analytics.utils';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <div className={styles.about}>
          <AboutHeader />
          <h4 className={styles.headLine}>
            Hi there 👋 <br /> I&apos;m a full-stack engineer based in France.
          </h4>
          <Section
            title="About me"
            content="I'm a freelance software engineer base in Amboise, France. I have
              worked in web development since 2014 in various companies until I
              became freelance in 2021. I enjoy solving real-life problems with code and
              designing efficient programs."
          />
          <Section
            title="Things I like"
            content="Blues music, playing badminton, hiking in the nature, Mexican food"
          />
          <Section
            title="Contact me"
            content={
              <>
                <LinkButton
                  href="https://www.linkedin.com/in/guillaume-fay-44b39597/"
                  target="_blank"
                  label="LinkedIn"
                  icon={LinkedInIcon.src}
                />
                <LinkButton
                  href="https://github.com/MaGOs92"
                  target="_blank"
                  label="GitHub"
                  icon={GithubIcon.src}
                />
              </>
            }
          />
        </div>
        <div className={styles.game}>
          <Connect4
            onPlayed={(gameState: GameState) =>
              event({
                action: 'played_connect4',
                params: {
                  game_state: gameState,
                },
              })
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
