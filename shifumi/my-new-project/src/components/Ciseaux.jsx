import React from 'react'

import ciseaux from './../assets/image/icon-scissors.svg'



export default function Ciseaux() {
  return (
    <div><div className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-yellow-200 border-solide border-[30px]'> <img className='h-[50%] hover:h-[60%] transition-[2s]' src={ciseaux} alt="" /></div></div>
  )
}
