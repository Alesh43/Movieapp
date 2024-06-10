import React from 'react'
import SideBar from '../side-bar'
import Header from '../header'
import { Outlet } from 'react-router-dom'

const Defaultlayout = () => {
  return (
    <div className=''>
        <Header/>
      <SideBar/>
      <div className='ml-20 '>
        <Outlet/>
      </div>
    </div>
  )
}

export default Defaultlayout
