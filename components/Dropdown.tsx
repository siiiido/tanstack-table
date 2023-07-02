'use client'
import React, { useState } from 'react'
import { FaWpbeginner } from 'react-icons/fa'
import { GiLevelThreeAdvanced, GiStarSattelites } from 'react-icons/gi'
import DropdownList from './DropdownList'

const list = [
  { city: 'OV-Ney York', emotion: <FaWpbeginner /> },
  { city: 'OV-Korea', emotion: <GiLevelThreeAdvanced /> },
  { city: 'OV-Japan', emotion: <GiStarSattelites /> },
]
const list1 = [
  { city: 'Ney York11', emotion: <FaWpbeginner /> },
  { city: 'Korea11', emotion: <GiLevelThreeAdvanced /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
]
const list2 = [
  { city: 'Ney York11', emotion: <FaWpbeginner /> },
  { city: 'Korea11', emotion: <GiLevelThreeAdvanced /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
  { city: 'Japan11', emotion: <GiStarSattelites /> },
]

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(3)

  return (
    <>
      <DropdownList
        isOpen={isOpen === 0}
        setIsOpen={() => setIsOpen(0)}
        title={'Overview'}
      >
        <div className="text-neutral-500 absolute top-11 items-start rounded-lg p-2 w-full ">
          {list.map((item, index) => (
            <div
              className="flex w-full p-4 justify-start hover:text-blue-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-400 border-l-4 "
              key={index}
            >
              <h3 className="text-xl">{item.emotion}</h3>
              <h3 className="font-bold ml-14">{item.city}</h3>
            </div>
          ))}
        </div>
      </DropdownList>

      <DropdownList
        isOpen={isOpen === 1}
        setIsOpen={() => setIsOpen(1)}
        openMargin={'mt-[40px]'}
        title={'Second Part'}
      ></DropdownList>

      <DropdownList
        isOpen={isOpen === 2}
        setIsOpen={() => setIsOpen(2)}
        openMargin={'mt-[40px]'}
        title={'DropdownList'}
      >
        <div className="text-neutral-500 absolute top-11 items-start rounded-lg p-2 w-full ">
          {list1.map((item, index) => (
            <div
              className="flex w-full p-4 justify-start hover:text-blue-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-400 border-l-4 "
              key={index}
            >
              <h3 className="text-xl">{item.emotion}</h3>
              <h3 className="font-bold ml-14">{item.city}</h3>
            </div>
          ))}
        </div>
      </DropdownList>

      <DropdownList
        isOpen={isOpen === 3}
        setIsOpen={() => setIsOpen(3)}
        titleMargin={'mt-7'}
        openMargin={'mt-[40px]'}
        title={'Third Part'}
      >
        <div className="text-neutral-500 absolute top-11 items-start rounded-lg p-2 w-full ">
          {list2.map((item, index) => (
            <div
              className="flex w-full p-4 justify-start hover:text-blue-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-blue-400 border-l-4 "
              key={index}
            >
              <h3 className="text-xl">{item.emotion}</h3>
              <h3 className="font-bold ml-14">{item.city}</h3>
            </div>
          ))}
        </div>
      </DropdownList>
    </>
  )
}

export default Dropdown
