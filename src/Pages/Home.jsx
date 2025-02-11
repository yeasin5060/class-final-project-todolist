import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Stay Productive with a To-Do List",
      excerpt: "Discover the best ways to manage your tasks effectively and boost productivity...",
      date: "February 11, 2025",
    },
    {
      id: 2,
      title: "5 Tips for Better Task Management",
      excerpt: "Learn how to organize your daily tasks efficiently with these expert tips...",
      date: "February 10, 2025",
    },
    {
      id: 3,
      title: "Why You Should Use a To-Do List Every Day",
      excerpt: "A to-do list can change the way you work and help you achieve your goals...",
      date: "February 9, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Blog</h1>

        {/* Blog Post List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg p-5">
              <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
