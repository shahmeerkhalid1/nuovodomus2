"use client"
import React, { useEffect } from 'react'
import TopNavbar from './topNavbar'
import MobileNavbar from './mobileNavbar';
import BottomNavbarTwo from './bottomNavbarTwo';

const HeaderTwo = () => {

  return (
    <>

      <header className='w-full bg-background shadow-md !sticky top-0 z-40'>
            <div className=' hidden xl:block'>
                <div className='container-fluid'>
                <BottomNavbarTwo />
                </div>
            </div>
            <div className='xl:hidden block'>
                <MobileNavbar />
            </div>
        </header>
    </>
  )
}

export default HeaderTwo