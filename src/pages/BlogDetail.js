
import { useParams, Link } from 'react-router-dom';
import data from '../data.json'; 
import { Navbar } from '../component/Navbar';
import { GoChevronLeft } from "react-icons/go";


export const BlogDetail = () => {
  const { id } = useParams(); 
  const blog = data.posts.find((post) => post.id === id); 

  if (!blog) return <div>Blog not found</div>; 

  
  const relatedBlogs = data.posts.filter(
    (post) => post.category === blog.category && post.id !== blog.id
  );

  return (
    <div >

   <Navbar/>
   <div className="w-screen px-5 bg-gray-100 flex flex-wrap gap-10 justify-center mt-16 ">
   <div className={`rounded-md bg-white mt-20 -ml-2 p-10 flex flex-col gap-6  ${relatedBlogs.length > 0 ? `w-[60%]`:`w-[80%]`} min-w-96 h-fit`}>
   <Link to='/' className='flex gap-2 items-center  bg-blue-500 text-white rounded-md w-20 p-1 '><GoChevronLeft />
      <button> Back</button>
      </Link>
      <h1 className='font-bold text-3xl'>{blog.title}</h1>
      <img src={blog.img} alt={blog.title} className=" w-auto h-72 object-fill" />
     
      <div className="content">{blog.content}</div>
      <div className="mr-10">Author: {blog.author}</div>
      <div className="mr-10">{new Date(blog.date).toLocaleDateString()}</div>
    
      <div className='font-bold'>
        Tags: {blog.tags.join(' , ')}
      </div>
      
      

      
    </div>
    <div className=' w-[30%] rounded-md mt-10 -ml-2 p-10 flex flex-col gap-6 min-w-96 h-fit'>

{relatedBlogs.length > 0 ? (<div>
  <h2 className='text-3xl font-bold text-center text-gray-500'>Related Blogs</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          {relatedBlogs.map((relatedBlog) => (
            <Link
              key={relatedBlog.id}
              to={`/blog/${relatedBlog.id}`}
              className="w-[30%] border border-gray-200 shadow-xl rounded-xl overflow-hidden min-w-80 bg-white"
            >
              <img
                src={relatedBlog.img}
                alt={relatedBlog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <div className="font-semibold">
                  {relatedBlog.title.length > 25
                    ? relatedBlog.title.substring(0, 22) + '...'
                    : relatedBlog.title}
                </div>
                
                <div className="text-sm text-gray-600">{relatedBlog.author}</div>
                <div className="text-sm text-gray-600">
                  {new Date(relatedBlog.date).toLocaleDateString()}
                </div>
                <div>
                    {relatedBlog.content.length > 100 ? (
    <>
      {relatedBlog.content.substring(0, 90)}...
      <span className="text-blue-500">Read more</span>
    </>
  ) : (
    relatedBlog.content
  )}
</div>
                
              </div>
            </Link>
          ))}
        </div>
</div>):(<div></div>)}


       
      </div>
  </div>
  
    </div>
  );
};




