import React, { useContext } from 'react'
import { Images } from '../constants'
import { Mycontext } from '../context';


export default function HomePage({users}) {
  const data = users.users
  console.log(data);
  
  const {userData} = useContext(Mycontext)

  
  
  return (
    <div className='flex justify-between p-10'>
      <h1>hello {userData.user} you are {userData.age} </h1>
     {
      data.map((user, index) => (
        // <img src={Images[user.image]} alt="" />
        <div className='w-[30vw] h-[30vh] bg-red-300 rounded-md flex items-center px-4 gap-x-4'>
          <div className='w-[150px] h-[150px] rounded-full'>
            <img src={Images[user.image]} alt="" className='w-full h-full rounded-full'/>
          </div>
          <div className='w-[60%] h-[80%]  flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>{user.name}</h1>
          </div>
        </div>
      ))
     }
    </div>
  )
}
