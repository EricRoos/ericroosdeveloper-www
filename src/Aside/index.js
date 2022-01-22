function Aside({className}) {
  return (
    <aside id='aside' className={`bg-primary ${className} p-2 text-white`}>
      <div className='flex flex-col divide-y divide-y-black gap-6'>
        <div className='py-6' >
          <div id='info' className='text-center gap-6 flex flex-col'>
            <div className='text-xl'>Eric Roos</div>
            <div className='max-h-32 rounded-full flex justify-center items-center overflow-hidden m-auto aspect-square'>
              <img src='https://place-hold.it/300x300' className='rounded-full'/>
            </div> 
            <div>
              Lorem Ipsum dolor set.
            </div>
          </div>
          <div id='socials'>
          </div>
        </div>
        <div className='py-6' >
          <div id='links' className='flex flex-col gap-2 text-lg w-3/5 m-auto'>
            <div>About Me</div>
            <div>Portfolio</div>
            <div>Resume</div>
            <div>Blog</div>
          </div>
        </div>
        <div className='py-6'>
          <div className='text-center'>
            Dark Mode 
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;

