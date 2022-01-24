import Heading from '../Heading';
import withTranslations from '../WithTranslations';

import Content from './content';

function Project({title, description}){
  return (
    <div className='flex flex-col md:flex-row bg-light-gray dark:bg-black dark:text-light-gray p-6 rounded drop-shadow'>
      <div className='flex-grow'>
        <Heading>{title}</Heading>
        <p className='hidden md:block'>
          { description }
        </p>
      </div>

      <div className='w-full h-auto md:w-1/4 lg:w-1/3 bg-gray overflow-hidden'>
        <img src='https://place-hold.it/400x300' alt='' className='w-full h-auto'/>
      </div>
      <p className='md:hidden block mt-2'>
        { description }
      </p>
    </div>
  );
}
const ProjectList = [
  'datefeed',
  'budgetr',
  'dailystandup',
  'bsReader',
  'bsSentences',
]

function Portfolio(){
  const Translate = withTranslations(Content);

  return (
    <div className='p-8'>
      <h1 className='md:text-3xl text-2xl font-bold py mb-4'>
        Things I&apos;ve worked on
      </h1>
      <div id='project-collection' className='flex gap-4 flex-col'>
        { ProjectList.map( project => (
          <Project
            title={<Translate path={`projects.${project}.name`}/>}
            description={<Translate path={`projects.${project}.description`} />}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
