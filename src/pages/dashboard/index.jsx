import React, { useContext } from 'react'
import { Mycontext } from '../../context'
import SideBar from '../../components/SideBar'
import DashContent from '../../components/DashContent'


export default function LibraryDashboard() {
    const {activeUser, setActiveUser, opendModal, setOpenModal} = useContext(Mycontext)
    
    
  return (
    <div className='flex'>
      {
        opendModal && (
          <div className='w-full h-full bg-black/50 absolute top-0 left-0' onClick={() => setOpenModal(false)}></div>
        )
      }
      {/* <h1>welcome {activeUser.username} </h1> */}
      <SideBar />
      <DashContent />
    </div>
  )
}
