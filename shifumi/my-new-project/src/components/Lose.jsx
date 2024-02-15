import React from 'react'

export default function Lose(props) {
  return (
    <div className='text-white h-[100%] flex flex-col justify-center items-center'>
    <h1 className='text-[50px]'>You-Lose</h1>
    <button onClick={()=>{props.setpage(0) ; props.setenemie(0);props.setscore(props.score-1)}} className='h-[50px] w-[100px]' type="button">Rejouer</button>
</div>
  )
}
