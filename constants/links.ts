import { CgDanger } from 'react-icons/cg';
import { AiFillFire } from 'react-icons/ai';
import { LuTrendingUpDown } from 'react-icons/lu';
import { HiBan } from 'react-icons/hi';
import { RiExchangeFill, RiBarChartBoxFill } from 'react-icons/ri';

export const headerMenuLinks = [
  {
    menuIcon: LuTrendingUpDown,
    name: 'Markets',
    href: '/markets',
  },
  {
    menuIcon: HiBan,
    name: 'Boycott',
    href: '/boycott',
    icon: CgDanger,
  },
  {
    menuIcon: RiExchangeFill,
    name: 'Exchanges',
    href: '/exchanges',
  },
  {
    menuIcon: RiBarChartBoxFill,
    name: 'Gainers & Losers',
    href: '/gainersandlosers',
    icon: AiFillFire,
  },
];
