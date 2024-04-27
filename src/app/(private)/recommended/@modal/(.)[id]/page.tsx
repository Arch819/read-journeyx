'use client';

import DialogComponent from '@/app/components/DialogComponent';
import DetailBook from '@/app/components/PopUp/DetailBook';
import { togglePopUp } from '@/lib/appState/appStateSlice';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   dispatch(togglePopUp('DetailBook'));
  // }, [dispatch]);

  return (
    <DialogComponent open={true} onClose={() => router.back()}>
      <DetailBook causedBy="recommended" />
    </DialogComponent>
  );
}
