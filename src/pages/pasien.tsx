'use client'
import { useRouter } from 'next/navigation'

import {NormalButton} from '../components/atoms/Button'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { selectAuth, signout } from '@/lib/store/features/user/authSlice';
import { useEffect } from 'react';

export default function Pasien() {
  const auth = useAppSelector(selectAuth);
  const router = useRouter();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if(!auth.token) router.push('/', { scroll: false });
  }, [auth.token])

  const handleClick = () => {
    dispatch(signout());
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Pasien
            </h1>
            <div>
              <NormalButton onClick={handleClick} label='Logout' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}