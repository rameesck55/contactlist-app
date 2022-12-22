import React,{useState} from 'react'
import './Bottom.css'

function Bottom({data,data2,data3}) {





  return (
    <div className='bottommain'>
        
        <div><i id='iconsbottomcontact' onClick={()=>{data3(data.id)}} class="fa fa-edit" aria-hidden="true"></i></div>

        <div className='wordsdoc'>
            <p>{data.Name}</p>
        <p>{data.Email}</p>
        </div>
        
        <div><i id='iconsbottomdelete' onClick={()=>{data2(data.id)}} class="fa fa-trash-o" aria-hidden="true"></i></div>
        
      
    </div>
  )
}

export default Bottom
