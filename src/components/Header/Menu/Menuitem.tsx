import styles from '../styles.module.scss';

type MenuItemProps = { content: string; href: string };

function MenuItem({ content, href }: MenuItemProps) {
  return <div className={styles.menuItem}>{content}</div>;
}

export default MenuItem;
