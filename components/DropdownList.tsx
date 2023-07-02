import React, { useState } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

interface DropdownListPros {
  titleMargin?: string
  openMargin?: string
  isOpen: boolean
  setIsOpen: () => void
  children?: React.ReactNode
  title: string
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownList: React.FC<DropdownListPros> = ({
  isOpen,
  setIsOpen,
  titleMargin,
  openMargin,
  children,
  title,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-43 h-4 rounded-lg ${openMargin}`}
    >
      <button
        onClick={setIsOpen}
        className="p-1 pl-5  w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent text-neutral-500  active:border-white duration-300 active:text-white"
      >
        {title}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && children}
    </div>
  )
}

export default DropdownList
