import React from 'react'
import rules from './../assets/image/image-rules.svg'
import x from "./../assets/image/icon-close.svg"

export default function Rules(props) {
  return (
    <div className=' bg-white h-[70%] w-[40%]  flex justify-center items-center absolute  flex-col rounded-xl'>
      <h1 className='text-[50px] h-[20%]'>Rules</h1>
      <img  src={rules} alt="" />
      <button className='h-[100px] w-[100px] flex justify-center items-center' onClick={()=>{props.setrule(0)}} type="button"> <img src={x} alt="" srcset="" /></button>
       
    </div>
  )
}
