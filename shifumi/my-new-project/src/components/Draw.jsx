import React from 'react'

export default function Draw(props) {
  return (
    <div className='text-white h-[100%] flex flex-col justify-center items-center'>
    <h1 className='text-[50px]'>Draw-Match</h1>
    <button onClick={()=>{props.setpage(0) ; props.setenemie(0);}} className='h-[50px] w-[100px]' type="button">Rejouer</button>
</div>
  )
}
