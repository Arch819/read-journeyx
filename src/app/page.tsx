'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  console.log(router);
  const isLoggedIn = false;

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/recommended');
    } else {
      router.push('/sign-up');
    }
  }, [isLoggedIn, router]);

  return null;
}
