import { useEffect } from 'react';
import { Popover } from 'react-tiny-popover'
import { useLocation } from 'react-router-dom';

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
  const currentLocation = useLocation();
  
  useEffect( () => {
    setIsOpen(false);
  }, [currentLocation]);

  function toggle(){
    setIsOpen(!isOpen);
  }


  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      content={<div className='animate__animated animate__faster animate__slideInUp md:hidden w-[80vw] m-auto px-4'><Aside className='rounded-xl rounded-br-none'/></div>}
    >
      <button
        aria-label='menu'
        onClick={toggle}
        className={`block drop-shadow-2xl md:hidden flex fixed bottom-4 right-4 rounded p-3 bg-primary z-1 justify-center items-center text-white text-3xl ${ isOpen ? 'bg-gray rounded-t-none' : '' }`}
      >
        { !isOpen && <BsMenuUp /> }
        { isOpen && <IoMdClose /> }
      </button>
    </Popover>
  )
}

export default FloatingMenu;
