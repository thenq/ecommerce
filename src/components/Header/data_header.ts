import fbIcon from '@/assets/icons/fb.svg';
import igIcon from '@/assets/icons/instagram.svg';
import ytIcon from '@/assets/icons/youtube.svg';
import cartIcon from '@/assets/icons/cart.svg';
import heartIcon from '@/assets/icons/heart.svg';
import reloadIcon from '@/assets/icons/reload.svg';
import { sidebar } from '@/constants/sidebar';

const leftIcons = [
  {
    src: fbIcon,
    href: '',
  },
  {
    src: igIcon,
    href: '',
  },
  {
    src: ytIcon,
    href: '',
  },
];

const rightIcons = [
  {
    src: reloadIcon,
    href: '',
  },
  {
    src: heartIcon,
    href: '',
  },
  {
    src: cartIcon,
    href: '',
  },
];

const menuItems = [
  {
    content: 'Home',
    href: '/',
  },
  {
    content: 'Home',
    href: '/',
  },
  {
    content: 'Home',
    href: '/',
  },
  {
    content: 'Home',
    href: '/',
  },
  {
    content: 'Home',
    href: '/',
  },
  {
    content: sidebar.LOGIN,
    href: '/',
  },
];

export { leftIcons, menuItems, rightIcons };
