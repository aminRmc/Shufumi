import Rules from "./components/Rules"
import { useState,} from "react"
import titre from './assets/image/logo.svg'
import Acceuil from "./components/Acceuil"




export default function App() {


  const [rule, setrule] = useState(0)
  const [count, setcount] = useState(0)
  return (
    <section className=" h-screen p-20 relative bg-gradient-to-b from-f to-t flex justify-center items-center flex-col">
      <div className="w-[60%] flex justify-start border-solid border-[2px] mb-6 border-white rounded-xl p-3  ">
        <div className="w-[60%] flex justify-start items-center"><img src={titre} alt="" /></div>
        
        <div className="h-[95%] w-[300px] bg-white flex flex-col justify-center items-center text-[40px] rounded-2xl">
            <h1>counter</h1>
            <h1>{count}</h1>
        </div>
      </div>

      <Acceuil />

    
    <div className=' h-[100px] w-[100%] flex justify-end items-center'>
      <button className='text-white h-[50px] w-[100px] bg-slate-400 rounded-xl' type="button"  onClick={()=>{setrule(1)}} >Rules</button>
    </div>
   {
    rule == 1 &&  <Rules setrule={setrule} />
    
   }
    </section>
  )
}
