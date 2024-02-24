"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/helpers/header';
import Image from 'next/image';
import axios from 'axios';
import Data from '@/app/mainpage/Data';
import  "../janrasoi.css";
import Loader from '@/helpers/loader';
import { Quantico } from 'next/font/google'
import Donate from '@/helpers/donate';
import { useRouter } from 'next/navigation';
import Footer from '@/helpers/footer';

const inter = Quantico({ weight: '700', subsets: ['latin'] })
interface Item{
    id: number;
    name: string;
    image: string;
    salePrice: string;
    Bread: string;
    Sabzi: string;
    Rice: string;
    specs: string;
    Helpline : string;
}

const ParticularItem = ({params}:any) => {
  const [id, setId] = useState<Item>({
    id: params.id,
    name: "",
    image: "",
    salePrice: "",
    Bread:"",
    Sabzi: "",
    Rice: "",
    specs: "",
    Helpline: ""
  })
  const [foodAvailable , setFoodAvailable] = useState(0);
  const [isLoading, setIsLoading] = useState(1);
  const items = Data;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('../api/card')
        const number = res.data.data
        const newwe = items[number - 1];
        setId(newwe)
        setIsLoading(0)

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  },);

 
  
  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className='h-full w-full '>
      <Header/>
      <div className="flex md:flex-row flex-col md:h-[648px] h-min items-center xl:mx-[280px] lg:mx-24 sm:mx-16 mx-4 pt-36 pb-24">
        <div className="md:w-[50%] w-[90%] md:h-full bg-[#ffffff] image">
          <Image 
            src={id.image} 
            alt={id.name}
            width={460}
            height={460}
            className='object-fill md:h-full w-full bg-[#ffffff] ima'
          />
        </div>
        <div className="md:w-[50%] w-[90%] h-full mt-4 md:mt-0 md:ml-6  ">
          <div className={inter.className}>
            <h1 className="text-4xl sm:text-5xl pt-1 font-bold pb-6 text-black  ">{id.name}</h1>
          </div>
          {foodAvailable == 0 ? (
  <h1 className="text-2xl  pb-6 font-semibold text-[#388e3c]">
    Food is available at this food kitchen.
  </h1>
   ) : ( <h1 className="text-2xl pt-4 pb-4 font-semibold text-red-900 ">Food is not available at this food kitchen.</h1> )}
         <label className="font-bold mt-8  text-[#388e3c] " htmlFor="h1">Cost of the Thaali</label>
         <h1 className="text-5xl pb-6   font-semibold  font-sans text-[#b5865d] ">{id.salePrice}</h1> 
   
          <label className="font-bold  text-[#388e3c] " htmlFor="h1">Customer Care Helpline Number </label>
          <div className="flex ">
            <h1 className="text-3xl  font-bold text-[#b5865d] ">{id.Helpline}</h1>
          </div>


          <button 
            onClick={() => alert("This will redirect the user to the Google Map Location of that Food Kitchen.")} 
            className="btn btn-warning mt-4 w-48 rounded-md text-white text-xl "
          >
            LOCATION
          </button>
        </div>
      </div>
      <div className="h-max xl:mx-[280px] lg:mx-24 mx-12 sm:mx-16 ">
        <h1 className="text-3xl w-full h-min pb-3 font-bold text-[#b5865d] border-b-2 border-black">Details</h1>
        <br />
        <table className="table text-black font-semibold ">
          <tbody>
            <tr >
              <td>Bread</td>
              <td>{id.Bread}</td>
            </tr>
            <tr>
              <td>Sabzi</td>
              <td>{id.Sabzi}</td>
            </tr>
            <tr className='border-b-2 border-black'>      
              <td>Rice</td>
              <td>{id.Rice}</td>
            </tr>
          </tbody>
        </table>
        <div className="h-max w-full mt-16">
          <h1 className="text-3xl w-full h-min pb-3 font-bold text-[#b5865d] border-b-2 border-black">DESCRIPTION</h1>
          <h1 className="py-8 border-b-2 border-black text-black text-lg ">{id.specs}</h1>
          <br/>
        </div>
      </div>
      <Donate/>
      <Footer/>
    </div>
  );
};

export default ParticularItem;
