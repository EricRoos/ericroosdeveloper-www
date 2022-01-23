import { useEffect } from 'react';
import { Popover } from 'react-tiny-popover'

import {
  BsMenuUp
} from 'react-icons/bs'

import{
  IoMdClose
} from 'react-icons/io'

import { useState } from 'react';
import Aside from '../Aside';

function FloatingMenu(){
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect( () => {
  }, []);

  function toggle(){
    setIsOpen(!isOpen);
  }


  return (
    <Popover
      isOpen={isOpen}
      content={<div className='md:hidden w-[80vw] m-auto px-4'><Aside className='rounded-xl rounded-br-none'/></div>}
    >
      <button onClick={toggle} className={`md:hidden flex fixed bottom-4 right-4 rounded p-3 bg-primary z-1 justify-center items-center text-white text-3xl ${ isOpen ? 'bg-gray rounded-t-none' : '' }`}>
        { !isOpen && <BsMenuUp /> }
        { isOpen && <IoMdClose /> }
      </button>
    </Popover>
  )
}

export default FloatingMenu;
