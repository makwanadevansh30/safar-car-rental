'use client'
import React from 'react'
import './Banner.css'
// import CircleIcon from '@mui/icons-material/Circle';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router'


const Banner = () => {
  return (
    <div className="h-[90vh] ">
      <div className="cropped-image"> </div>
      <div className="px-80 bannerMiniContainer">
        <p className="text text-5xl font-bold text-white w-[25rem] mb-5">
          Efficient and Exotic car trips for businesses
        </p>
        <div className="py-5 bg-white w-[25rem] flex space-x-7 justify-around">
          <p>Daily</p>
          <p>Rental</p>
          <p>Outstation</p>
        </div>
        <div className="pt-5 bg-white">
          <div className="flex items-center justify-around">
            <div className="flex items-center py-2 border px-14 border-slate-900">
              {/*  <CircleIcon className="pr-8 text-green-800 " style={{ fontSize: 40 }} /> */}{" "}
              <p>Current Location</p>
            </div>
            <div className="flex items-center justify-around py-2 border px-14 border-slate-900">
              {/*  <CircleIcon className="pr-8 text-red-700 " style={{fontSize: 40 }} />  */}
              <p>Enter Destination </p>
            </div>
            <div
              onClick={() => router.push("/")}   
              className="flex items-center justify-around py-4 border cursor-pointer searchOlaCabButton px-14 border-slate-900"
            >
              <p className="font-semibold text-black ">
                {" "}
                Search <span className="text-green-400 ">Safar Cabs </span>
              </p>
              {/* <ArrowRightAltIcon className="text-green-400"/> */}
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                class=" mx-3 w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className='mt-10 border'>
            <img className='w-full h-64' 
            src='https://www.shutterstock.com/image-photo/car-rental-bannercar-keys-hand-260nw-2337021505.jpg'
            /* width="600" */
            // height="338999"
            // style="width: 600px; height: 337px;"
            alt='Banner2'/>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default Banner
