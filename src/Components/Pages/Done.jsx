import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import InputTodo from '../Todo/InputTodo'
import style from '../Todo/TodoList.module.css'



const green={
   textDecoration:"line-through solid black",
  height:"300px",
  marginTop:"5px",
  borderLeft:" 15px solid green",
  fontSize:"15px",
  backgroundColor:"black",

}




const Done = () => {
  const [fdata, setFdata] = React.useState([])
  const [flr,setFlr]=React.useState("")

  const {
      pdone,
      handleDelete,
      taskupdater,
      isVis,
      isVisNot,
      count
  }=useContext(AuthContext)

 

 const handleUpdate=(task)=>{
  taskupdater(task);
  isVis();
  isVisNot();
  
}
const filterFunction=(flr)=>{ 
 
    var filteredData = pdone.filter(function (item)
{
  return item.categry ===flr;
         
}
);
setFdata(filteredData)
 
}
  return (
    <div>
     <input value={flr} placeholder="Enter Categry" onChange={(e)=>setFlr(e.target.value)} />
     <button  onClick={()=>filterFunction(flr)}>FilterByCategory</button>
     
    <div className={style.maindiv}>
  
    {
      fdata.map((task)=>( 
          
          <div className={style.listdiv} key={task.id} style={green}>
         
          <p>Name:{task.name}</p> 
          <p>Title:{task.title}</p>
          <p>Rating:{task.rating}</p> 
          <p>Categry:{task.categry}</p> 
          <p>Price:{task.price}</p>  
         

            <div>
            <button  className={style.set} onClick={()=>handleDelete(task)}>Delete</button>
            <button className={style.met} onClick={()=>handleUpdate(task)}>Update</button>
            
            </div>
           
           
             
          </div>
          
      ))
  }
    
    </div>
    
    
    </div>
    
  )
}

export default Done