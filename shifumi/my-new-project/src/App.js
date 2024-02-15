import Rules from "./components/Rules"
import { useState,} from "react"
import titre from './assets/image/logo.svg'
import Acceuil from "./components/Acceuil"
import Feuille from "./components/Feuille"
import Pierre from "./components/Pierre"
import Ciseaux from "./components/Ciseaux"
import Win from "./components/Win"
import Lose from "./components/Lose"

export default function App() {


  const [rule, setrule] = useState(0)
  const [page, setpage] = useState(0)
  const [enemie, setenemie] = useState(0)
  const [score, setscore] = useState(0)
  const [win, setWin] = useState(false)
  


  return (
    
    <section className=" h-screen p-20 relative bg-gradient-to-b from-f to-t flex justify-center items-center flex-col">
      <div className="w-[60%] flex justify-start border-solid border-[2px] mb-6 border-white rounded-xl p-3  ">
        <div className="w-[60%] flex justify-start items-center"><img src={titre} alt="" /></div>
        
        <div className="h-[95%] w-[300px] bg-white flex flex-col justify-center items-center text-[40px] rounded-2xl">
            <h1>counter</h1>
            <h1>{score}</h1>
        </div>
      </div>
      <div className="flex gap-6 grid-cols-2 text-white">
    { page  == 0 &&  <Acceuil setpage={setpage}  setenemie={setenemie}/> }
    { page  == 1 &&  <Feuille setpage={setpage}   />  }
    { page  == 2 &&  <Ciseaux setpage={setpage}  /> }
    { page  == 3 &&  <Pierre setpage={setpage}  /> }

    { enemie == 1 && page == 2 ? <Win setenemie={setenemie} setpage={setpage}/>:null}
    { enemie == 3 && page == 1 ? <Win setenemie={setenemie} setpage={setpage}/>:null}
    { enemie == 2 && page == 3 ? <Win setenemie={setenemie} setpage={setpage}/>:null}

    { enemie == 2 && page == 1 ? <Lose setenemie={setenemie} setpage={setpage}/>:null}
    { enemie == 1 && page == 3 ? <Lose setenemie={setenemie} setpage={setpage}/>:null}
    { enemie == 3 && page == 2 ? <Lose setenemie={setenemie} setpage={setpage}/>:null}

  
  
    
    {enemie == 1 && <Feuille />}                                                                          
    {enemie == 3 && <Pierre />}
    {enemie == 2 && <Ciseaux />}
  
    </div>
     

    
    <div className=' h-[100px] w-[100%] flex justify-end items-center'>
      <button className='text-white h-[50px] w-[100px] bg-slate-400 rounded-xl' type="button"  onClick={()=>{setrule(1)}} >Rules</button>
    </div>
   {
    rule == 1 &&  <Rules setrule={setrule} />
    
   }

    </section>
  )
}
