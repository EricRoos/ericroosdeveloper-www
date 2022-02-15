import {
  IoPersonCircle,
  IoCodeSlash,
  IoDocumentTextSharp,
} from 'react-icons/io5'

import Resume from '../static-files/Resume.pdf?url'

import { Link } from 'react-router-dom';

import {
  BsJournalRichtext
} from 'react-icons/bs';

function Aside({className}) {
  return (
    <aside id='aside' className={`flex flex-col divide-y divide-y-black gap-6 bg-primary p-2 text-light-gray dark:grayscale-[50%] ${className}`}>
      <div className='py-6' >
        <div id='info' className='text-center gap-6 flex flex-col'>
          <div className='text-xl'>Eric Roos</div>
          <div className='max-h-32 rounded-full flex justify-center items-center overflow-hidden m-auto aspect-square'>
            <img src='https://gravatar.com/avatar/dca12ef12f5f526427d2d582bba05552?s=400&d=robohash&r=x' className='rounded-full' alt=''/>
          </div> 
          <div>
            Tech / Team Lead
          </div>
        </div>
        <div id='socials'>
        </div>
      </div>
      <div className='py-6' >
        <div id='links' className='flex flex-col gap-2 text-lg w-3/5 m-auto'>
          <Link to='/'>
            <div className='flex items-center gap-2 hover:text-black'>
              <IoPersonCircle/> About Me
            </div>
          </Link>
          <Link to='/portfolio'>
            <div className='flex items-center gap-2 hover:text-black'>
              <IoCodeSlash /> Portfolio
            </div>
          </Link>
          <a href={Resume}>
            <div className='flex items-center gap-2 hover:text-black'>
              <IoDocumentTextSharp /> Resume
            </div>
          </a>
          { false && (
            <Link to='/blog'>
              <div className='flex items-center gap-2 hover:text-black'>
                <BsJournalRichtext /> Blog
              </div>
            </Link>
          ) }
        </div>
      </div>
    </aside>
  );
}

export default Aside;

