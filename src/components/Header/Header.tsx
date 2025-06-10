import BoxIcon from '@/components/BoxIcon/BoxIcon';
import MenuItem from '@/components/Header/Menu/Menuitem';
import { useSidebarContext } from '@/contexts';
import { leftIcons, menuItems, rightIcons } from './data_header';
import styles from './styles.module.scss';

function Header() {
  const { setIsOpen } = useSidebarContext();

  return (
    <div className={styles.containerHeader}>
      <div className={styles.flexInline}>
        <div className={styles.containerBoxIcon}>
          {leftIcons.map((item, index) => (
            <BoxIcon src={item.src} href={item.href} key={index} bg='#000' />
          ))}
        </div>

        <div className={styles.containerMenu}>
          {menuItems.slice(0, 3).map((item, index) => (
            <MenuItem content={item.content} href={item.href} key={index} />
          ))}
        </div>
      </div>
      <div className={styles.containerMenu}>Thế Hoàng Outfit</div>
      <div className={styles.containerMenu}>
        <div className={styles.containerMenu}>
          {menuItems.slice(3, menuItems.length).map((item, index) => (
            <MenuItem content={item.content} href={item.href} key={index} />
          ))}
        </div>

        <div className={styles.containerBoxIcon}>
          {rightIcons.map((item, index) => (
            <button onClick={() => setIsOpen(true)} key={index}>
              <BoxIcon src={item.src} href={item.href} key={index} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
