import '@/App.css';
import SideBar from '@/components/SideBar';
import { SideBarProvider, ToastProvider } from '@/contexts';
import { createAppRouter } from '@/routers';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

const isAuthenticated = true;

const router = createAppRouter(isAuthenticated);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider>
        <SideBarProvider>
          <SideBar />
          <RouterProvider router={router} />
        </SideBarProvider>
      </ToastProvider>
    </Suspense>
  );
}

export default App;
