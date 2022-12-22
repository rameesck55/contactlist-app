import React,{useState,useEffect} from 'react'
import './Contctmain.css'
import { v4 as uuidv4 } from 'uuid';




function Contctmain({datas,editting,deleting,deletting}) {
    const [words,usewords]=useState({})
    const [storindedit, setstorindedit] = useState({})
    const [final,setfinal]=useState(false)


  const wordssaving=(events)=>{
      const{name,value}=events.target
      usewords({...words,[name]:value})

  }
  const storewords=(event)=>{
    console.log('contact_data',words)
    event.preventDefault()
    datas(words)
    
}




const words_saving=(eventsss)=>{
  const{name,value}=eventsss.target
  setstorindedit({...storindedit,[name]:value})
  console.log(storindedit)

}

const store_words=(event)=>{
  event.preventDefault()
  deletting(editting[0].Name)
  setfinal(!final)
   
}



useEffect(()=>{
  if(final){
    datas(storindedit)

  }
} ,[final])



useEffect(() => {
  
  setstorindedit(editting[0])
  
}, [editting])



  return (
<>
    {editting[0]?.id===undefined ?

      <div className='mainbody'>
      <h1>Contact List</h1>
      <hr />
      <h4>Add Contct</h4>
      <label htmlFor="">Name:</label><input type="text"placeholder='Name' name='Name' onChange={wordssaving} /><br /><br />
      <label htmlFor="">Email:</label><input type="text" placeholder='Email' name='Email' onChange={wordssaving} /><br /><br />
      <button className='addbutton' onClick={storewords}>ADD</button>
  
  </div>

   :
   <div className='mainbody'>
   <h1>Contact List</h1>
   <hr />
   <h4>update Contct</h4>
   <label htmlFor="">Name:</label><input type="text"placeholder='Name' name='Name' onChange={words_saving} value={storindedit?.Name}/><br /><br />
   <label htmlFor="">Email:</label><input type="text" placeholder='Email' name='Email' onChange={words_saving} value={storindedit?.Email}/><br /><br />
   <button className='addbutton' onClick={store_words}>update</button>

</div>
    
    }
   </>
  )
}

export default Contctmain
