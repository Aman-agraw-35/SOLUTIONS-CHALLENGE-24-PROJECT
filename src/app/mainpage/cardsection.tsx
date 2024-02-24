"use client"
import React,{useEffect} from 'react';
import Data from './Data';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const CardSection:any = () => {
 const  router = useRouter();
 const handleClick =  async (d: any) =>
  {
    try {
      const response = await axios.post("../api/card", d )
      router.push(`/janrasoi/${d}`);
      
    } catch (error:any) {
      console.log("Process failed", error.message);
  } 
  }
     
  return (
    <div className="h-auto bg-black w-full flex md:py-32 py-0 xl:px-32 px-4 gap-6 justify-center flex-wrap ">
      {Data?.slice(0,9).map((x) => (
        <div key={x.id} 
         onClick={() => handleClick(x.id)} 
        className="w-[400px] h-[393px]
        hover:cursor-pointer bg-white border-white border-[1px] 
        mb-4 ">
          <h1 className='text-lg bg-black p-2'>{x.name}</h1>
          <Image
            src = {x.image}
            alt ={x.name}
            width={400}
            height={299}
            className="w-[4000px] h-[299px] z-[-1] object-cover bg-center  bg-white "      />
          <div className="flex  bg-white  flex-row">

          <h1 
          className='text-lg w-full  pt-3 bg-black pl-2 p-2 pr-2 
          text-[#b5865d] font-bold  '>
            <a className=' bg-black   ' href="">Helpline No :- </a>{x.Helpline}
          </h1>
            </div>
        </div>
      ))}
    </div>
  )}