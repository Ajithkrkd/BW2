import React from 'react'

const Header = () => {
  return (
    <>
    <div className="flex gap-3 items-center justify-between  p-2 flex-row bg-[#2480EA]">
    <p className='text-center'>logo</p>
      <ul className="flex gap-5 items-center text-[#FFFF] font-semibold cursor-pointer p-2 flex-row">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>blog</li>
      </ul>
    </div>
    </>
  )
}

export default Header