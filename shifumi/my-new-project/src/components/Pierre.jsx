import React from 'react'
import pierre from './../assets/image/icon-rock.svg'



export default function Pierre() {
  return (
    <div>
         <div className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-red-500 border-solide border-[30px]'><img className='h-[50%] hover:h-[60%] transition-[2s]' src={pierre} alt="" /> </div>
    </div>
  )
}
