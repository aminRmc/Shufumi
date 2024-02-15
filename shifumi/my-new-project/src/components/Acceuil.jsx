import React from 'react'

import pierre from './../assets/image/icon-rock.svg'
import feuille from './../assets/image/icon-paper.svg'
import ciseaux from './../assets/image/icon-scissors.svg'
import Feuille from './Feuille'
import Pierre from './Pierre'
import Ciseaux from './Ciseaux'

export default function Acceuil(props) {
  let r =()=>{
   return Math.round(Math.random() * (3 - 1) + 1);
  } ;

  <Feuille r={r} />;
  <Pierre r={r} />;
  <Ciseaux r={r} />;
  return (
    <div className=' w-[700px] gap-10 flex justify-center items-center flex-wrap'>
      
      <div onClick={()=>{props.setpage(1); props.setenemie(r())}} className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-blue-500 border-solide border-[30px]'> <img className='h-[50%] hover:h-[60%] transition-[2s]' src={feuille} alt="" /></div>
      <div onClick={()=>{props.setpage(2);props.setenemie(r())}} className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-yellow-200 border-solide border-[30px]' > <img className='h-[50%] hover:h-[60%] transition-[2s]' src={ciseaux} alt="" /></div>
      <div onClick={()=>{props.setpage(3);props.setenemie(r())}} className='cursor-pointer flex justify-center items-center bg-white h-[300px] w-[300px] rounded-[50%] border-red-500 border-solide border-[30px]'><img className='h-[50%] hover:h-[60%] transition-[2s]' src={pierre} alt="" /> </div>
   
    </div>
  )
}
