import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled?: boolean;
};

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage,
  isMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 ${
        isMenuToggled ? 'hover:text-primary-500' : 'hover:text-primary-300'
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default NavLink;
