import { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface ToastContextType {
  toast: typeof toast;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const value = { toast };

  return (
    <ToastContext.Provider value={value}>
      {children} <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
