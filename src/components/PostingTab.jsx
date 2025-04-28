function PostingTab({ posts = [] }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">📢 Department Announcements</h2>

      {posts.length === 0 ? (
        <p className="text-gray-600">No announcements at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
              <img
                src={post.image || "./placeholder.png"}
                alt={post.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 truncate">{post.title}</h3>

                <div className="flex items-center space-x-2 mb-2">
                  <img 
                    src="./teacher.png" 
                    alt="Teacher" 
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{post.uploaded_by}</span>
                </div>

                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostingTab;
