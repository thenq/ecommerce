import { useSidebarContext } from '@/contexts';
import styles from '../styles.module.scss';

type MenuItemProps = { content: string; href: string };

function MenuItem({ content, href }: MenuItemProps) {
  const { setIsOpen, setSidebarType } = useSidebarContext();

  const handleClickMenuItem = () => {
    setIsOpen(true);
    setSidebarType(content);
  };

  return (
    <div className={styles.menuItem} onClick={handleClickMenuItem}>
      {content}
    </div>
  );
}

export default MenuItem;
