'use client';

import { toggleIsMobile } from '@/redux/appState/appStateSlice';
import { selectIsLoggedIn } from '@/redux/auth/authSelectors';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/recommended');
    } else {
      router.push('/sign-up');
    }
  }, [isLoggedIn, router]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     dispatch(toggleIsMobile(window.innerWidth < 768));
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [dispatch]);

  return null;
}
