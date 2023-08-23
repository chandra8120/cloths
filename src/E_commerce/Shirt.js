

import {useState,useEffect} from 'react'
import Footer from './Footer'
function Shirt() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setData(data.products))
    // .then(data=>console.log(data))
    
  },[])
  return (
    <div className="App" >
      

    <div style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center",boxShadow:" 15px 15px #666868"}}>    
       {data.map((ele,ind)=>{return <div style={{width:"22%",height:"30%",minWidth:"200px"}} key={ele.id}><img style={{width:"70%",height:"100%",boxShadow:" 15px 15px #666868",border:"1px solid black",marginTop:"10%",borderRadius:"2%"}} src={ele.images[1]} />
       <div>{ele.title}</div>
       <div>Price :{ele.price}</div>
       <div>{ele.description}</div>
       </div>})}
       
    </div>
    <Footer />
</div>
  )}
export default  Shirt