import Button from '@/components/Button';
import styles from './styles.module.scss';

function Banner() {
  return (
    <div className={styles.container}>
      <div>The Hoang Outfit</div>
      <Button>Go to Shop</Button>
    </div>
  );
}

export default Banner;
