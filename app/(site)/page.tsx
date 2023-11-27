import Image from 'next/image';
import React from 'react'
import AuthForm from '../(site)/componants/AuthForm';

const Home = () => {
  return (
    <div className='
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    '>
        <div className="sm:mx-auto sm:w-full sm:max-w-md  ">
            <Image
            alt='logo'
            height={48}
            width={48}
            src="/images/messengerLogo.png"
            className='mx-auto w-auto'
             />
             <h2
             className='
             mt-6
             text-center
             font-bold
             tracking-tight
             text-gray-900
             '
             >
                Sign in to your account
             </h2>
        </div>
        <AuthForm />
    </div>
  )
}

export default Home;