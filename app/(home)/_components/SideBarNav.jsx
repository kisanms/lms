"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'


function SideBarNav() {
  const menuList = [
    {
      id: 1,
      name: 'Browse',
      icon: Search,
      path: '/browse'
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: Layout,
      path: '/dashboard'
    },
  ];

  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <Link href="http://localhost:3000/"><div className='p-5 border-b'>
        <Image src='/logok.png'

          alt='logo'
          width={170}
          height={100} /></div>
      </Link>


      <div className='flex flex-col '>
        <div className="flex gap-2 items-center  text-gray-500  cursor-pointer"
        >

          <ul>
            <li>
              <div className='flex  hover:bg-gray-100 hover:text-green-700 p-4 px-6'>
                <Search />
                <Link cl href="/browse">Browse</Link>
              </div>
            </li>
            <li>
              <div className="flex  hover:bg-gray-100 hover:text-green-700 p-4 px-6">
                <Layout />
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </li>

            <li>

            </li>
          </ul>

        </div>


      </div>



    </div>
  )
}

export default SideBarNav
