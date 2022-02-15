import Content from './content';
import withTranslations from '../WithTranslations';

import Heading from '../Heading';
import JavaScriptIcon from './icons/javascript.svg?url';
import RailsIcon from './icons/rails.svg?url';
import RubyIcon from './icons/ruby.svg?url';
import ReactIcon from './icons/react.svg?url';
import HtmlIcon from './icons/html.svg?url';
import CssIcon from './icons/css.svg?url';
import GitIcon from './icons/git.svg?url';
import JavaIcon from './icons/java.svg?url';
import DockerIcon from './icons/docker.svg?url';

const SHOWN_LANGUAGES = [
  'javascript', 
  'ror',
  'web',
  'git',
  'java',
  'docker',
]

const icons = {
  ror: [ RubyIcon, RailsIcon ],
  javascript: [ JavaScriptIcon, ReactIcon ],
  web: [ HtmlIcon, CssIcon ],
  git: [ GitIcon ],
  java: [ JavaIcon ],
  docker: [ DockerIcon ]
}

function AboutMe(){
  const Translate = withTranslations(Content);

  return (
    <div className='w-auto'>
      <div className='flex flex-wrap justify-between bg-light-gray dark:bg-black dark:text-light-gray p-9'>
        <div className='w-full lg:w-1/2'>
          <div className='mb-4'>
            <h1 className='text-4xl font-bold py'>
              <Translate path='heading.name'/>
            </h1>
            <h2 className='text-xl py text-accent'>
              <Translate path='heading.title'/>
            </h2>
          </div>
          <p>
            <Translate path='heading.summary' />
          </p>
        </div>
        <div className='w-full lg:w-1/3 overflow-hidden justify-center lg:justify-end flex'>
          <img src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/36276032_10156563743169828_4137601936247488512_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zD2fpmg2qtoAX97l11q&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-84t2jDRIBS73NrJoipGN6VQBx0vXsstmTk21tehMsWg&oe=6231A1C1' alt=''/>
        </div>
      </div>
      <div className='px-8 pt-4 bg-white dark:bg-gray'>
        <div>
          <Heading>
            <Translate path='body.WhatIDo' />
          </Heading>
          <p>
            <Translate path='body.WhatIDoContent' />
          </p>
        </div>
        <div className='flex mt-4 flex-wrap'>
          { SHOWN_LANGUAGES.map( language => (
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
              <div className='flex h-6 gap-2'>
                { (icons[language] || []).map( i => <img key={i} src={i} alt='' /> ) }
              </div>
              <h3 className='font-bold font-lg py-2'>
                <Translate path={`languages.${language}.name`} />
              </h3>
              <p>
                <Translate path={`languages.${language}.description`} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
