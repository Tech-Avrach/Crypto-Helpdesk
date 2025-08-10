import React from 'react';

const BlogsSection = () => {
  const blogs = [
    {
        id: 1,
        image: "https://cdn.aglty.io/fortanix/blog/blogthumbs/Guide-To-Choosing-the-Best-and-Most-Secure-Crypto-Wallets.webp",
        title: "What is the best and most secure crypto wallet of 2025?",
        category: "News",
        date: "Mar 2, 2025"
      },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/6217a376b29e9b5ebb01ccd6/621e846b0a10dd6595fd66a1_great-crypto-apps-thumbnail-image-web3-webflow-template.png",
      title: "Useful keyboard shortcuts for all popular trading apps",
      category: "Articles",
      date: "Mar 2, 2025"
    },
    {
      id: 3,
      image: "https://m.economictimes.com/thumb/msid-119805576,width-1200,height-900,resizemode-4,imgsize-3534412/lead-image.jpg",
      title: "5 great crypto apps you should not be missing out",
      category: "Resources",
      date: "Mar 2, 2025"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Latest Blogs</h2>
        <button className="px-8 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-gray-400 transition-colors duration-200">
          Browse articles
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 leading-tight transition-colors duration-200 group-hover:text-yellow-500">
                {blog.title}
              </h3>
              
              {/* Category and Date */}
              <div className="flex items-center space-x-2 text-sm pt-2">
                <span className="font-mono text-gray-600">{blog.category}</span>
                <div className="w-px h-4 bg-gray-300"></div>
                <span className="text-gray-500">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;