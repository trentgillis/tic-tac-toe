import { useState } from 'react';

import { Modal as ModalComponent } from '@/components';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const Modal = ({ children }: { children: React.ReactNode }) => {
    return <ModalComponent isOpen={isVisible}>{children}</ModalComponent>;
  };

  return { Modal, show, hide };
};
