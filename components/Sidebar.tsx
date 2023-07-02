'use client'
import React, { useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { FaWpbeginner } from 'react-icons/fa'
import { TbAlignBoxCenterMiddleFilled } from 'react-icons/tb'
import { GiLevelThreeAdvanced, GiStarSattelites } from 'react-icons/gi'
import Dropdown from './Dropdown'

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-white overflow-y-auto">
      <h2 className="px-9 py-20 text-lg text-blue-700 font-bold">
        Sidebar Title
      </h2>
      <Dropdown />
    </div>
  )
}

export default Sidebar
