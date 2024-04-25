import React from 'react';
import SecondaryBtn from '../SecondaryBtn';
import { useAppDispatch } from '@/lib/hooks';
import { signOutThunk } from '@/lib/auth/authThunk';
import { notiflixConfirm } from '@/utils/notiflixMessages';

type LogOutBtnProps = {};
function LogOutBtn({}: LogOutBtnProps) {
  const dispatch = useAppDispatch();

  async function handleClick() {
    try {
      await notiflixConfirm('logout');
      dispatch(signOutThunk());
    } catch (error) {
      return;
    }
  }

  return <SecondaryBtn text="Log out" onClick={handleClick} />;
}

export default LogOutBtn;
