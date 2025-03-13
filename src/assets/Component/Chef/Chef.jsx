import React from 'react'
import chef1 from "../../../Gallery/Chef1.webp"
import chef2 from "../../../Gallery/Chef2.webp"
import chef3 from "../../../Gallery/Chef3.webp"
import chef4 from "../../../Gallery/Chef4.webp"
import fb from "../../../Gallery/fb.png";
import twitter from "../../../Gallery/twitter.png";
import insta from "../../../Gallery/instagram.png";


export default function Chef() {
  return (
    <div className='relative bg-orange-100 py-24 px-10'>
      <div>
      <h1 className="text-orange-500 text-4xl lg:text-5xl text-center font-bold food pb-16">Chefs</h1>
      <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='flex justify-center items-center'>
          <span>
            <img src={chef1} className='h-96 rounded-md' />
            <br />
            <h1 className='text-center text-2xl'>Executive chef</h1>
            <br />
            <div className='flex justify-center items-center gap-2'>
              <img src={fb} className='w-8 cursor-pointer'/>
              <img src={twitter} className='w-8 cursor-pointer'/>
              <img src={insta} className='w-8 cursor-pointer'/>
            </div>
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <span>
            <img src={chef2} className='h-96 rounded-md' />
            <br />
            <h1 className='text-center text-2xl'>Head chef</h1>
            <br />
            <div className='flex justify-center items-center gap-2'>
              <img src={fb} className='w-8 cursor-pointer'/>
              <img src={twitter} className='w-8 cursor-pointer'/>
              <img src={insta} className='w-8 cursor-pointer'/>
            </div>
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <span>
            <img src={chef3} className='h-96 rounded-md' />
            <br />
            <h1 className='text-center text-2xl'>Sous chef</h1>
            <br />
            <div className='flex justify-center items-center gap-2'>
              <img src={fb} className='w-8 cursor-pointer'/>
              <img src={twitter} className='w-8 cursor-pointer'/>
              <img src={insta} className='w-8 cursor-pointer'/>
            </div>
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <span>
            <img src={chef4} className='h-96 rounded-md' />
            <br />
            <h1 className='text-center text-2xl'>Sous chef</h1>
            <br />
            <div className='flex justify-center items-center gap-2'>
              <img src={fb} className='w-8 cursor-pointer'/>
              <img src={twitter} className='w-8 cursor-pointer'/>
              <img src={insta} className='w-8 cursor-pointer'/>
            </div>
          </span>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
