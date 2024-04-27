'use client';

import {
  selectDevice,
  selectError,
  selectIsLoading,
} from '@/lib/appState/appStateSelectors';
import { toggleIsMobile } from '@/lib/appState/appStateSlice';
import { selectIsLoggedIn, selectIsRefreshing } from '@/lib/auth/authSelectors';
import { getCurrentThunk } from '@/lib/auth/authThunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { notiflixMessage } from '@/utils/notiflixMessages';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Loader from './components/Loader';
import DialogComponent from './components/DialogComponent';

type AppProviderProps = {
  children: React.ReactNode;
};

const privateRoute = ['/recommended', '/library', '/reading'];
const restrictedRoutes = ['/sign-in', '/sign-up'];

function AppProvider({ children }: AppProviderProps) {
  const dispatch = useAppDispatch();
  const device = useAppSelector(selectDevice);
  const isError = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const router = useRouter();
  const path = usePathname();
  const isPrivateRoute = privateRoute.includes(path);
  const isRestrictedRoute = restrictedRoutes.includes(path);

  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      notiflixMessage('error', isError);
    }
  }, [isError]);

  useEffect(() => {
    if (isPrivateRoute && !isLoggedIn && !isRefreshing) {
      router.push('/sign-in');
    }
    if (
      isRestrictedRoute &&
      isLoggedIn &&
      !isRefreshing &&
      path !== '/recommended'
    ) {
      router.push('/recommended');
    }
  }, [
    isLoggedIn,
    isPrivateRoute,
    isRefreshing,
    isRestrictedRoute,
    path,
    router,
  ]);

  useLayoutEffect(() => {
    if (device === undefined) {
      handleResize();
    }
    function handleResize() {
      if (window.innerWidth < 768) {
        dispatch(toggleIsMobile('mobile'));
      }
      if (window.innerWidth > 768 && window.innerWidth < 1439) {
        dispatch(toggleIsMobile('tablet'));
      }
      if (window.innerWidth > 1440) {
        dispatch(toggleIsMobile('desktop'));
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [device, dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          {isLoading && <Loader />}
          {children}
          <DialogComponent />
        </>
      )}
    </>
  );
}

export default AppProvider;
