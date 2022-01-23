import ReactMarkdown from 'react-markdown';
import ExamplePost from './example.md';

import { useState, useEffect } from 'react';
function Blog(){
  const [ markdown, setMarkdown ] = useState('');

  const [ currentPost, setCurrentPost ] = useState(ExamplePost);
  useEffect( () => {
    fetch(ExamplePost).then( resp => {
      resp.text().then( (val) => {
        setMarkdown(val);
      });
    });
  }, [currentPost])

  return (
    <div className='w-full p-8' id='blog'>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Blog;
