import React,{useState,useContext} from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import style from './InputTodo.module.css';

const InputTodo = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState();
    const [categry, setCategry] = useState("")
    const [price, setPrice] = useState();
    const {
        incCount,
        isVisible,
        isNot,
        isVisNot,
        isVis,
        uid
    }=useContext(AuthContext);

    const handleAdd =()=>{
    
        fetch(' http://localhost:3000/posts',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    "name":name,
               "title":title,
               "rating":rating,
               "categry":categry,
               "price":price
                }
            )
        }).then(()=>{
            console.log(name);
            setName("");
            setCategry("")
            setPrice("")
            setRating("");
            setTitle("");
            incCount(1);
        })
       
    }
 
    const handleChange = ()=>{
       
       
        fetch(`http://localhost:3000/posts/${uid}`,{
            method:'PUT',
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
                "name":name,
               "title":title,
               "rating":rating,
               "categry":categry,
               "price":price
            })
        }).then(()=>{
                  incCount(1);
                  isVisNot();
                  isVis();
                 
                  setName("");
            setCategry("")
            setPrice("")
            setRating("");
            setTitle("");
        })
    }


  return (
    <div>
    <input  className={style.input} value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
   <br/>
    <input  className={style.input} value={title} placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} />
    <br/>
    <input  className={style.input} value={rating} placeholder='Enter Rating' onChange={(e)=>setRating(e.target.value)} />
    <br/>
    <input  className={style.input} value={categry} placeholder='Enter Category' onChange={(e)=>setCategry(e.target.value)} />
    <br/>
    <input  className={style.input} value={price} placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} />
    <br/>
    {isVisible && ( 
    <button  className={style.button} onClick={handleAdd}>ADD</button>
    )}
    {isNot && (
        <button  className={style.button} onClick={handleChange} >Edit Item</button>
    )}
    
    </div>
  )
}

export default InputTodo