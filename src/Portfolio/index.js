import Heading from '../Heading';
import { default as withTranslations, getTranslationText } from '../WithTranslations';

import Content from './content';

function Project({title, description, link}){
  return (
    <div className='flex flex-col bg-light-gray dark:bg-black dark:text-light-gray p-6 rounded drop-shadow gap-4'>
      <Heading>{title}</Heading>
      <p className=''>
        { description }
      </p>
     { !!link && (
       <a href={link}>{link}</a>
     ) }
    </div>
  );
}
const ProjectList = [
  'personalsite',
  'finbrain',
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
            link={getTranslationText(Content, `projects.${project}.link`)}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
