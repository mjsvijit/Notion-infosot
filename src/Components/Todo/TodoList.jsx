import React,{useContext} from 'react'
import { AuthContext } from '../../Auth/AuthContext';
import style from './TodoList.module.css'

const green={
    
    height:"300px",
    marginTop:"5px",
    borderLeft:" 15px solid green",
    fontSize:"15px",
    backgroundColor:"black",
  
}





const TodoList = () => {
  
  

    const {
      
        taskupdater,
        isVis,
        isVisNot,
       
        pdone,
      
        handleDelete
    }=useContext(AuthContext)

    
    
    const handleUpdate=(task)=>{
        taskupdater(task);
        isVis();
        isVisNot();
        
     }


    

     

 

  return (
    <div className={style.maindiv}>
                   {
                       pdone.map((task)=>( 
                           
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
  )
}

export default TodoList