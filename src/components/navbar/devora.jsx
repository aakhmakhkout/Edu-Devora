import { Link } from 'lucide-react';
import devoralogo from "../../assets/devora.png"
import { useState } from 'react';

export default function Devora() {
  return (
    <div >
      <button className='devora-ai flex items-center'>
            <p className='devoraText'></p>
            <img src={devoralogo} alt="devora" className='w-30 cursor-pointer'/>
        </button>
    </div>
  );
}



