import ReactMarkdown from 'react-markdown';
import ExamplePost from './example.md';
function Blog(){
  const markdown = `foo`;
  return (
    <div className='p-8' id='blog'>
      <ReactMarkdown>
        {ExamplePost}
      </ReactMarkdown>
    </div>
  )
}

export default Blog;
