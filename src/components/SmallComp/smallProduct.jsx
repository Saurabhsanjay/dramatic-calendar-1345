import React from 'react'

const SmallProduct = ({data}) => {

    //console.log(data)

    return (
        <div style={{display : "flex", border:"1px solid"}} >
        {data.map((el)=> (

              <div style={{display : "flex", flexDirection:"column", justifyContent:"space-between", padding: "20px 0px", alignItems:"center"}}  >
                <img src={el.image} alt="" srcset="" width="50%" />
                <span>{el.offprice}</span>
                <a href="">{el.title}</a>
                <span>{
                    el.price
                }</span>
                <del>{el.del}</del>
              </div>
           

        ) )

        }

        </div>
    )
}

export default SmallProduct
