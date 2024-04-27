'use client';

import DialogComponent from '@/app/components/DialogComponent';
import DetailBook from '@/app/components/PopUp/DetailBook';
import { getByIdThunk } from '@/lib/books/booksThunk';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  return (
    <DialogComponent open={true} onClose={() => router.back()}>
      <DetailBook causedBy="library" />
    </DialogComponent>
  );
}
