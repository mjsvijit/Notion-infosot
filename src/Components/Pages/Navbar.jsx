import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css" 

const Navbar = () => {
  return (
    <div className={styles.maindiv}>
     <Link className={styles.left} to="">MoviList</Link>
    
     <Link  className={styles.right} to='/done'>Filter</Link>
     <Link  className={styles.right} to='/'>All</Link>
     
   
    
    </div>
  )
}

export default Navbar