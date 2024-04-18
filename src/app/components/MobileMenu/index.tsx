import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Navigation from '../Navigation';
import LogOutBtn from '../LogOutBtn';
import {
  MobileMenuBackdropStyled,
  MobileMenuCloseStyled,
  MobileMenuContainerStyled,
} from './MobileMenu.styled';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!open) return null;

  return createPortal(
    <MobileMenuBackdropStyled onClick={onClose}>
      <MobileMenuContainerStyled onClick={(e) => e.stopPropagation()}>
        <MobileMenuCloseStyled className="btn" onClick={onClose}>
          x
        </MobileMenuCloseStyled>
        <Navigation onClose={onClose} />
        <LogOutBtn />
      </MobileMenuContainerStyled>
    </MobileMenuBackdropStyled>,
    document.getElementById('portal')!,
  );
}

export default MobileMenu;
