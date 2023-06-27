'use client'
import React from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { FaWpbeginner } from 'react-icons/fa'
import { TbAlignBoxCenterMiddleFilled } from 'react-icons/tb'
import { GiLevelThreeAdvanced, GiStarSattelites } from 'react-icons/gi'

const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-white">
      <h2 className="px-9 py-20 text-lg text-blue-700 font-bold">
        Sidebar Title
      </h2>
      <nav>
        <ul>
          <li className="flex">
            <AiFillAppstore />
            Overview
          </li>
          <li className="flex">
            <FaWpbeginner />
            Apprentice
          </li>
          <li className="flex">
            <TbAlignBoxCenterMiddleFilled />
            Average
          </li>
          <li className="flex">
            <GiStarSattelites />
            Elite
          </li>
          <li className="flex">
            <GiLevelThreeAdvanced />
            Hokage
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
