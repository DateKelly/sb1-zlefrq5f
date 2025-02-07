import React from "react";
import BlogPosts from '../components/BlogPosts';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Empty container for blog content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog content will be placed here */}
        <BlogPosts />
      </div>
    </div>
  );
}
