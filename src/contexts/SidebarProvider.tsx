import { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  sidebarType: string;
  setSidebarType: (open: string) => void;
}

const SideBarContext = createContext<SidebarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState('');

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, sidebarType, setSidebarType }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
