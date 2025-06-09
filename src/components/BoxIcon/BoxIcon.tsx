import styles from './styles.module.scss';

type BoxIconProps = {
  src: string;
  href: string;
  bg?: string;
};
function BoxIcon({ src, href, bg = '#fff' }: BoxIconProps) {
  return (
    <div className={styles.boxIcon} style={{ backgroundColor: bg }}>
      <img src={src} alt='' />
    </div>
  );
}

export default BoxIcon;
