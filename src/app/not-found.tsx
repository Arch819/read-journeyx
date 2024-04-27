'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';

type Props = {};

function NotFound({}: Props) {
  const router = useRouter();
  const path = usePathname();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
      router.replace('/recommended');
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [router]);

  return (
    <div>
      <Header />
      <div className="container">
        <p>Could not found page &#34;{path.slice(1)}&#34;</p>
        <p>
          you will automatically be redirected to the head page via: {counter}
          sec
        </p>
      </div>
    </div>
  );
}

export default NotFound;
