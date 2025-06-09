import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@/components/Layout/Layout';

function HomePage() {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Header />
        <Banner />
      </div>
    </MainLayout>
  );
}

export default HomePage;
