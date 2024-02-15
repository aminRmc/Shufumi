import React from 'react'
import pierre from './../assets/image/icon-rock.svg'
import feuille from './../assets/image/icon-paper.svg'
import ciseaux from './../assets/image/icon-scissors.svg'

let p = <div className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-red-500 border-solide border-[30px]'><img className='h-[50%] hover:h-[60%] transition-[2s]' src={pierre} alt="" /> </div>
let f = <div  className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-blue-500 border-solide border-[30px]'> <img className='h-[50%] hover:h-[60%] transition-[2s]' src={feuille} alt="" /></div>
let c =  <div  className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-yellow-200 border-solide border-[30px]' > <img className='h-[50%] hover:h-[60%] transition-[2s]' src={ciseaux} alt="" /></div>
export default function Pierre() {
  return (
    <div>
         <div className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-red-500 border-solide border-[30px]'><img className='h-[50%] hover:h-[60%] transition-[2s]' src={pierre} alt="" /> </div>
    </div>
  )
}
