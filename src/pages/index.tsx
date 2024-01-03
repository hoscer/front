'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {InputForm} from '../components/atoms/Input'
import {NormalButton} from '../components/atoms/Button'
import { use, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { selectAuth, signin, userLogin} from '@/lib/store/features/user/authSlice'

export default function Index() {
  const router = useRouter()
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    if(auth.token) router.push('/pasien', { scroll: false })
  }, [auth.token])
  
  const handleClick = () => {
    dispatch(signin(state))
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setState({
      ...state,
      [name]: value
    })
  }
  
  return auth.status == 'loading' ? <h1>loading.....</h1> : (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              hoscare
            </h1>
            <p className='text-gray-900'>{auth.message || ''}</p>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <InputForm name="username" label1={"Your email"} placeholder="name@company.com" type="email" value={state.username} onChange={handleChange}/>
              </div>
              <div>
                <InputForm name="password" label1={"Password"} placeholder="name@company.com" type="password" value={state.password} onChange={handleChange}/>
              </div>
              <div>
                <NormalButton onClick={handleClick} label='Login'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}