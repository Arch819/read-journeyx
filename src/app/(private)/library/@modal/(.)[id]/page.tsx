'use client';

import DialogComponent from '@/app/components/DialogComponent';
import DetailBook from '@/app/components/PopUp/DetailBook';
import { togglePopUp } from '@/lib/appState/appStateSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export interface PageProps {
  params: { id: number };
}

export default function Page({ params }: PageProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(togglePopUp('DetailBook'));
  }, [dispatch]);

  return (
    <DialogComponent open={true} onClose={() => router.back()}>
      <DetailBook causedBy="library" />
    </DialogComponent>
  );
}
