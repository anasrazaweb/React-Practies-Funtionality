import React, { useState } from 'react'

const Practies = () => {

    const [AddData, setAddData] = useState([
        { age: "12" },
        { age: "13" },
        { age: "14" },
        { age: "15" },
        { age: "16" },
        { age: "17" },
    
    ])
    const handeledelet = (index) => {
        const Dataold = [...AddData.filter((item,i)=>i!==index)]
        console.log(Dataold,"anas")
        setAddData(Dataold)
        
   
    }
    return (
        <div style={{
            display:"flex" ,
            justifyContent:"center",
            alignItems:"center" ,
            flexDirection:"column"
        }}>
            <h1>Item Delet paracties</h1>
            {AddData.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                    <div>{index+1}</div>
                    <div>{item.age}</div>
                    <button onClick={() => handeledelet(index)}>✖</button>
                </div>
            ))}
        </div>
    )
}

export default Practies