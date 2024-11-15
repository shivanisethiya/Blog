import { Link } from "react-router-dom";

const BlogList = ({ filteredBlogList, loading }) => {
  if (loading) return <>Loading...</>;

  return (
    <div className="w-full h-[85%] px-5">
    
      <div className="w-full h-full flex flex-wrap gap-8 items-start overflow-y-auto p-6">
        {filteredBlogList.map((Blog) => (
          <Link key={Blog.id} to={`/blog/${Blog.id}`} className="w-[19%] flex flex-col items-center p-1 h-fit my-3 min-w-80 rounded-xl overflow-hidden border border-gray-200 
          transition ease-in-out delay-150    hover:shadow-2xl duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          ">
            <div className="bg-white rounded-md">
              <img
                src={Blog.img}
                alt="Blog"
                className="w-full h-28 object-cover rounded-md"
              />
              <div className="mt-2 mb-2 px-3">
                <div className="font-semibold text-2xl">
                  {Blog.title.length > 25
                    ? Blog.title.substring(0, 22) + "..."
                    : Blog.title}
                </div>
                <div className="text-sm text-gray-600">{Blog.category}</div>
                <div className="text-sm text-gray-600">{Blog.author}</div>
                <div className="text-sm text-gray-600">
                  {new Date(Blog.date).toLocaleDateString()}
                </div>
                <div>
  {Blog.content.length > 100 ? (
    <>
      {Blog.content.substring(0, 90)}...
      <span className="text-blue-500">Read more</span>
    </>
  ) : (
    Blog.content
  )}
</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
