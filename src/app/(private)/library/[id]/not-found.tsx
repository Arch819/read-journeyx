'use client';

import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found book</p>
      <Link href="/library">Back to library</Link>
    </div>
  );
}
