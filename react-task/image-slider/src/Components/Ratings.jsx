import React from 'react'
import { FaStar } from "react-icons/fa";
const Ratings = ({stars}) => {
  return (
    <div className='flex gap-1 py-2' >
      {[...Array(stars)].map(()=>(
        <p className='text-amber-400 text-sm' ><FaStar/></p>
      ))}

{[...Array(5-stars)].map(()=>(
        <p className='text-slate-400 text-sm' ><FaStar/></p>
      ))}
    </div>
  )
}

export default Ratings
