import React,{useState,useEffect} from 'react'
import Bottom from '../components/Bottom'
import Contctmain from '../components/Contctmain'
import './Home.css'
import { v4 as uuidv4 } from 'uuid';


function Home() {
 
  const [alldetails,setalldetails]=useState(JSON.parse(localStorage.getItem("details"))||[])
  const[alledit,setedit]=useState([])

  
  const add=(eventt)=>{
    setalldetails([...alldetails,{...eventt,id:uuidv4()}])

  }


  useEffect(()=>{
    localStorage.setItem("details", JSON.stringify(alldetails));

  },[alldetails])



  const deleteitem=(name1)=>{
    const afterdlt=alldetails.filter((names)=>{
     return names.id!==name1
     })
    setalldetails(afterdlt)
    console.log(alledit) 
  }


  const edittingitem=(cat1)=>{
    
    const afteredit=alldetails.filter((named)=>{
      return named.id===cat1
    })
  
    setedit(afteredit)
  
  }

  const deleteitems=(naam)=>{
    const afterdlts=alldetails.filter((names)=>{
     return names.Name!==naam
     })
    setalldetails(afterdlts)
    console.log(alledit)
    
    
  }
  


 



  return (
    <div>
        <div> <Contctmain datas={add} editting={alledit} deletting={deleteitems} />  </div>


        {alldetails.map((value,index)=>(
          <div><Bottom data={value} data2={deleteitem} data3={edittingitem}/></div>


        ))}

      
        
    </div>
  )
}

export default Home
