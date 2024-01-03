'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {InputForm} from '../components/atoms/Input'
import {NormalButton} from '../components/atoms/Button'

export default function Index() {
  
  const router = useRouter()
  
  const handleClick = () => {
    router.push('/pasien', { scroll: false })
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              hoscare
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <InputForm label1={"Your email"} placeholder="name@company.com" type="email"/>
              </div>
              <div>
                <InputForm label1={"Password"} placeholder="name@company.com" type="password"/>
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