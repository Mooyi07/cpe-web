import { useState } from "react";
import './postingtab.css';
import { firstName, lastName, middleName, idNumber } from '../data/userData';

function PostingTab({ posts = [] }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [newPost, setNewPost] = useState({
    title: '',
    message: '',
    uploaded_by: `${lastName}, ${firstName} ${middleName.at(0)}. (${idNumber})`,
    date: '',
    image: ''
  });

  return (
    <div className="p-6 text-gray-800 dark:text-gray-100">
      <div className="flex align-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-6">📢 Department Announcements</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          ➕ New Announcement
        </button>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No announcements at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image || "./logo512.png"}
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
                  <span className="text-sm text-gray-700 dark:text-gray-300">{post.uploaded_by}</span>
                </div>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto shadow-lg relative transform scale-95 opacity-0 animate-modal-pop">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
            >
              &times;
            </button>

            <img
              src={selectedPost.image || "./logo512.png"}
              alt={selectedPost.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedPost.title}</h3>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="./teacher.png"
                alt="Teacher"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{selectedPost.uploaded_by}</span>
              <span className="text-xs text-gray-400">{selectedPost.date}</span>
            </div>

            <div className="whitespace-pre-line leading-relaxed text-[15px]">{selectedPost.message}</div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4">New Announcement</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newEntry = { ...newPost, date: new Date().toLocaleDateString() };
                posts.unshift(newEntry); // Local update only
                setNewPost({ title: '', message: '', uploaded_by: '', image: '', date: '' });
                setShowForm(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Uploaded by"
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                value={newPost.uploaded_by}
                disabled
                required
              />

              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded h-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                value={newPost.message}
                onChange={(e) => setNewPost({ ...newPost, message: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Image URL (optional)"
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostingTab;
