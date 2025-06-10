import styles from './styles.module.scss';
import { useSidebarContext } from '@/contexts';
import classNames from 'classnames';
import { IoCloseSharp } from 'react-icons/io5';
import { sidebar } from '@/constants/sidebar';
import Login from '@/components/Login/Login';

export default function SideBar() {
  const { container, overlay, sideBar, slideSideBar, close, content } = styles;
  const { isOpen, setIsOpen, sidebarType } = useSidebarContext();

  const handleGenerateContent = () => {
    switch (sidebarType) {
      case sidebar.LOGIN:
        return <Login />;
      default:
        break;
    }
  };

  return (
    <div className={container}>
      <div className={classNames({ [overlay]: isOpen })} onClick={() => setIsOpen(false)}></div>
      <div className={classNames(sideBar, { [slideSideBar]: isOpen })}>
        <div className={close} onClick={() => setIsOpen(false)}>
          <IoCloseSharp />
        </div>
        <div className={content}>{handleGenerateContent()}</div>
      </div>
    </div>
  );
}
