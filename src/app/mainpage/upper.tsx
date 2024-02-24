import React from 'react'
import Image from 'next/image';
import { Rubik_Spray_Paint } from 'next/font/google';
const roboto = Rubik_Spray_Paint({
  weight: '400',
  subsets: ['latin'],
});
const Upper = () => {
    return (
        <div className='w-full h-[30rem] bg-black align-middle mt-20 z-[-20] '>
        <Image 
        className="absolute opacity-60 bg-black w-full md:h-[480px] h-[310px] object-fill " 
        src="/images/222.jpg" 
        width={1530}
        height={600} alt='img'/>
                <div className={roboto.className}>

        <div className='relative w-[100%] bg-transparent  h-[300px] lg:pl-[10%] pl-[15%] pr-[10%] lg:pt-[12%] xl:pt-[8%] pt-[16%] '>
        <h1 className='lg:text-8xl bg-transparent  md:text-7xl  text-5xl  ' >
        EK ASHA, <br/> JAN SAHAYATA</h1>
        <h1 className=' sm:text-4xl bg-transparent text-3xl pt-[2%] ' >We provide food to the hungry.</h1>
        </div>
        </div>
        </div>
      )
}

export default Upper ;