function PostingTab({ posts = [] }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">📢 Department Announcements</h2>
  
        {posts.length === 0 ? (
          <p className="text-gray-600">No announcements at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post, index) => (
              <li key={index} className="bg-white shadow p-4 rounded-xl border border-gray-200">
                
                <div className="flex text-center w-full justify-between">
                  <h3 className="text-3xl font-semibold">{post.title}</h3>
                  
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm md:text-base">Uploaded By {post.uploaded_by}</h3>
                    <img 
                      src="./teacher.png" 
                      alt="Teacher" 
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </div>

                </div>
                
                <p className="text-sm text-gray-700">{post.message}</p>
                <p className="text-xs text-gray-400 mt-2">{post.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default PostingTab;