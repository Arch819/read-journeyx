'use client';

import React, { useEffect } from 'react';
import { selectIsLoggedIn } from '@/lib/auth/authSelectors';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/recommend');
    } else {
      router.push('sign-in');
    }
  }, [isLoggedIn, router]);

  return null;
}
