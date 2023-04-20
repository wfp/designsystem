import React, { PropsWithChildren } from 'react';
import Button from '../Button';

export type MobileButtonProps = PropsWithChildren<{
  /**
   * Status of the mobile menu
   */
  openMobileMenu?: boolean;
  /**
   * Prefix for the component CSS class
   */
  prefix?: string;
  /**
   * Toggle the Menu
   */
  toggleMenu?: () => void;
}>;

const MobileButton: React.FC<MobileButtonProps> = ({ toggleMenu, prefix }) => {
  return (
    <Button
      className={`${prefix}--main-navigation__button`}
      onClick={toggleMenu}>
      Menu
    </Button>
  );
};

export default MobileButton;
