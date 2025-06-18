import React from 'react'
import { BiSolidError } from "react-icons/bi";
//* importing a local image
import logo from '../assets/react.svg'

import { Icons, Images } from '../constants';

export default function ErrorPage() {
  const dynamicImage = 'https://dummyjson.com/icon/abc123/150'
  // * Using Background Images with CSS
  const bgError = {
    backgroundImage: `url(../../public/bg-error.avif)`,
    height: '500px',
    backgroundSize: 'cover'
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center gap-x-4' style={bgError}>
        <BiSolidError className='text-5xl' color='red'/>
        <img src={logo} alt="" />
        
        {
          // //* importing Image from the Public Folder
        }
        <img src="item-cart-03.jpg" alt="" />
        {
          //* Rendering Dynamic Image URLs
        }

        <img src={dynamicImage} alt="" />

        {
          //* import images from
        }
        <img src={Images.Logo} alt="" />


        <Icons.Airplane color='white'/>
      <h1 className='text-red-400 text-3xl'>Page Not Found 404</h1>
    </div>
  )
}
