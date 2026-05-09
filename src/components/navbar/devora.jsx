import { Link } from 'lucide-react';
import devoralogo from "../../assets/devora.png"
import { useState } from 'react';
import DevoraChatBox from '../DevoraChatBox';

export default function Devora() {
  const [isClicked, setisClicked] = useState(false)
  console.log(isClicked)
  return (
    <div className='flex flex-col items-end'>
      <div>
        {isClicked && <DevoraChatBox />}
      </div>
      <button className='devora-ai flex items-center' onClick={()=> setisClicked(!isClicked)}>
            <p className='devoraText'></p>
            <img src={devoralogo} alt="devora" className='w-30 cursor-pointer'/>
        </button>
    </div>
  );
}



