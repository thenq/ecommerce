import { useState } from 'react';
import styles from './styles.module.scss';

interface SideBarProps {
  children: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${styles.sideBar} ${isOpen ? styles.open : styles.close}`}>
      <button type='button' className={styles.toggle} onClick={handleClick}>
        x
      </button>
      {isOpen && children}
    </aside>
  );
}
