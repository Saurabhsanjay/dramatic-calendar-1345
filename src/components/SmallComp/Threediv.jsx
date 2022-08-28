import React from 'react'



const Threediv = ({data}) => {
  return (
    <div style={{display : "flex", flexDirection:"column", justifyContent:"space-between", padding: "20px 0px", alignItems:"start"}} >
     <img src={data.image} alt="" />
   <span>{data.title}</span>
   <p>{data.description }</p>
     
      
    </div>
  )
}

export default Threediv

