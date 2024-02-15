import Rules from "./components/Rules"
import { useState,} from "react"
export default function App() {
  const [rule, setrule] = useState(0)

  return (
    <section className=" h-screen p-20 bg-RadialGradient bg-slate-700 relative flex justify-center items-center">


    
    <div className=' h-[100px] w-[100%] flex justify-end items-center'>
      <button className='text-white h-[50px] w-[100px] bg-slate-400 rounded-xl' type="button"  onClick={()=>{setrule(1)}} >Rules</button>
    </div>
   {
    rule == 1 &&  <Rules setrule={setrule} />
    
   }
    </section>
  )
}
