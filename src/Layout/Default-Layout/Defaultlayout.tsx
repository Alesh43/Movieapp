import React from 'react'
import SideBar from '../side-bar'
import Header from '../header'
import { Outlet } from 'react-router-dom'

const Defaultlayout = () => {
  return (
    <div className=''>
        <Header/>
      <SideBar/>
      <div className='ml-64 w-full'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Defaultlayout
