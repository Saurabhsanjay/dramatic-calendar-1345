import React from 'react'

const Fourdiv = ({data}) => {
  console.log(data.divData)
    return (
    
    <div >
    <span style={{fontWeight:"bolder",fontSize:"14px"}}>{data.title}</span>

    <div style={{display:'flex', border:"1px solid" ,gap:"5px",marginRight:"20px"}}>
        {data.divData.map((el)=>(
            <div style={{padding:"5px"}}>
               <img src={el.img} alt="" /> 
               <p> {el.title2}</p>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default Fourdiv
